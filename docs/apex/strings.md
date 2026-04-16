# Strings

The Strings module is all about... well, strings. Strings are [immutable](https://en.wikipedia.org/wiki/Immutable_object) in Apex, meaning that once a String object is created, it cannot be changed. Any operation that appears to modify a String actually creates a new String object, which can have performance implications in Apex when dealing with heavy string manipulation.

This module was designed to provide a more developer-friendly API for working with strings in Apex, as well as some additional utility methods that are not available within the built-in String class.

[[toc]]

## StringBuilder

::: info 💾 Source Code
[StringBuilder.cls](https://github.com/dannielikestocode/slightwork/blob/string-builder-v1/force-app/main/default/classes/stringBuilder/StringBuilder.cls)
:::

The StringBuilder class serves as a utility to easily create strings within Apex. While it doesn't possess the full capabilities of a traditional StringBuilder as seen in other languages (such as Java), it does provide a convenient way to build strings composed of many parts.

### Implementation

- StringBuilder implements the <code>List<></code> collection type to collect all appended objects to avoid creating multiple string objects during the build process
- The <code>append()</code> method can be used to append any object to the list
- The output format of certain object types (such as <code>Datetime</code>) are influenced by the settings of the user that initiated the Apex transaction (E.g., Date Locale)
- When <code>build()</code> is called, it calls the <code>String.join()</code> method to combine all objects within the underlying list
- The behaviour of StringBuilder can be configured using various options, such as the <code>deduplicate</code> property


### Demos

**Basic Usage**

```apex
// Initialize
StringBuilder sb = new StringBuilder();
sb.append('Hello');
sb.appendWhitespace(Whitespace.NEWLINE);
sb.append('World!');

// Output: "Hello\nWorld!"
String helloWorld = sb.build();
System.debug(helloWorld);
```

**Loops**

```apex
// Initialize
StringBuilder sb = new StringBuilder();
for (Integer i = 0; i < 10; i++) {
    sb.append(i);
    sb.appendWhitespace(Whitespace.NEWLINE);
}

// Output: "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n"
String numbers = sb.build();
System.debug(numbers);
```

**Multiple Object Types**

```apex
// Initialize with options
StringBuilder sb = new StringBuilder();
sb.withDelimiter(' ');
sb.append('One'); // String
sb.append(true); // Boolean
sb.append(3); // Integer

// Output: "One true 3"
String multiObjectString = sb.build();
System.debug(multiObjectString);
```

### Usage Recommendations

The following points provide guidance on when to use the StringBuilder class:

- Building strings in loops or when concatenating many strings together
- Useful for creating strings with specific formatting, such as adding whitespace or newlines
- Convenient for building strings in a more readable and maintainable way
- Ideal for building strings from a combination of different object types

::: tip 📝 Note
Ultimately, think of StringBuilder as a convenience module. Since Salesforce doesn't reveal the inner workings of certain methods (such as <code>String.join()</code>), we can't assume that it's more memory or time performant than traditional string concatenation or methods such as <code>String.format()</code> (but, you can always try creating your own benchmarking tests to prove otherwise!).
:::