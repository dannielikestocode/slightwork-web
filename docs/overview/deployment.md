# Deployment

There are multiple options available to download and deploy SlightWork modules to your Salesforce instance, which are outlined below. Pick the option that best suits your needs.

The full source code can be found here: [SlightWork Source Code](https://github.com/dannielikestocode/slightwork/tree/main)

## Option 1: Manifest File

If you've cloned the project locally, you can make use of the preconfigured ***manifest*** files (also called a <code>package.xml</code> file) that are located within the <code>/manifest</code> path of the project. 

A manifest file is created **per module** to allow for easy deployment of individual modules. These files define all the metadata assets required for deployment to your org.

::: tip 📝 Note
Further documentation on manifest files available here: [Manifest Files](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm)
:::

Use the <code>sf project deploy start</code> command to deploy a module using a manifest file. You'll need to include the <code>--manifest</code> argument to specify the name of the module you want to deploy.

```bash
sf project deploy start --manifest manifest/strings.xml
```
For a detailed list of <code>cli</code> commands, see here: [SF CLI Commands](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_project_commands_unified.htm#cli_reference_project_deploy_start_unified)

## Option 2: Copy & Paste

Sometimes, the simplest option is the best option. This method is ideal for getting started quickly without the need for a full SFDX project setup.

If there's a specific class or subset of code that you need, simply copy and paste the source code directly into your SFDX project or sandbox org.

## Option 3: Unlocked Packages

::: tip ⚡️ Coming Soon!
Plans are underway to provide unlocked packages for easy installation of SlightWork modules into your Salesforce org.
:::