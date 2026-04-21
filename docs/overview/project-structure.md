# Project Structure

SlightWork is an SFDX project that's modular by design, making it simple to use only what you need or to modify it to accommodate your specific use cases.

## Source Code

For simplicity, the framework follows a [monorepo](https://monorepo.tools/) structure with a single, top-level SFDX project directory containing the following base subdirectories:

```
force-app/
    main/
        default/
            classes/
            lwc/
            
```

## Apex

Apex code is organized as <code>modules</code>, which serves as one of the pillars of SlightWork. These modules are designed to be both logical and technical boundaries that correlate functionality for solving specific problem domains. Each module is designed to work independently, but can also work in conjunction with other modules resulting in a highly modular and flexible framework.

Additionally, SlightWork was designed with extensibility in mind, meaning you can easily modify or extend functionality to suit your specific needs.

### Folder Hierarchy 

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

## Lightning Web Components (LWC)

Lightning Web Components are stored within the default, top-level <code>lwc</code> folder. However, additional assets referenced by components (CSS, Javascript, etc.) are organized as follows:

- **Generic Assets:** Bundled as <code>Static Resources</code> to be accessed by any component
- **Component-Specific Assets:** Stored directly as part of the component's definition

## Other Metadata

All other metadata (objects, permissions, etc.) are stored within their respective top-level folders due to limitations on how SFDX handles metadata organization for other asset types.

## Manifests

To simplify deployment (further outlined within the upcoming [Deployment](deployment.md) page), predefined [manifest](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm) files (also known as a <code>package.xml</code> files) are included with SlightWork. These files define all the relevant metadata required to deploy and use specific functionality. Here's an example manifest file for the Apex Strings module:

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
