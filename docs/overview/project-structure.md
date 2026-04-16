# Project Structure

The overall structure of the SlightWork SFDX project is modular by design, making it simple to use only what you need or modify it to accommodate your specific use cases.

## Modules

Modules are the building blocks of SlightWork, serving as both logical and technical boundaries to correlate functionality that solve specific domain problems. Each module is designed to work independently, but can also work in conjunction with other modules, resulting in a highly modular yet flexible framework.

Additionally, SlightWork was designed with extensibility in mind, meaning you can easily modify or extend functionality to suit your specific needs.

## Folder Hierarchy 

### Apex Modules

SFDX projects give you the flexibility to create multi-level folder structures for Apex-based metadata (classes, enums, interfaces, etc.). SlightWork takes advantage of this through the implementation of a hierarchical folder structure that adheres to the following pattern:

<code>path: force-app/main/default/classes/moduleName/</code>

```
moduleName/
    Class1.cls
    Class2.cls
    enums/
    interfaces/
    tests/
```

## Manifests

To simplify deployment (further outlined within the upcoming [Deployment](deployment.md) page), each module comes with its own ***manifest*** file, also know as a <code>package.xml</code> file. These files define all the relevant metadata required to deploy and use the functionality of a module within an org.

This allows you to deploy only the modules you need, or all of them at once. Here's an example of the manifest file for the Strings module:

<code>path: manifest/strings.xml</code>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>StringBuilder</members>
        <name>ApexClass</name>
    </types>
    <version>66.0</version>
</Package>
```
