# Strings

The Strings module is all about... well, strings. Just like most languages, Strings are  immutable in Apex. This means that once a String object is created, it cannot be changed. Any operation that appears to modify a String actually creates a new String object, which can have performance implications in Apex when dealing with heavy string manipulation.

This module was designed to provide a more developer-friendly API for working with strings in Apex, as well as some additional utility methods that are not available in the built-in String class.

[[toc]]

## StringBuilder

::: tip GitHub Source
<a href="https://github.com/dannielikestocode/slightwork/blob/string-builder-v1/force-app/main/default/classes/stringBuilder/StringBuilder.cls" target="_blank" rel="noopener">StringBuilder.cls</a>
:::

The StringBuilder class serves as a utility to easily create strings within Apex. While it doesn't possess the full capabilities of a traditional StringBuilder as seen in other languages (such as Java), it does provide a convenient way to build strings composed of many parts.

### Demos

#### Basic Usage

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

#### Loops

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

#### Multiple Object Types

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

<ul>
  <li>
    Building strings in loops or when concatenating many strings together
  </li>
  <li>
    Useful for creating strings with specific formatting, such as adding whitespace or newlines
  </li>
  <li>
    Convenient for building strings in a more readable and maintainable way
  </li>
  <li>
    Ideal for building strings from a combination of different object types
  </li>
</ul>