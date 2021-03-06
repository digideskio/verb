# Data

> Setting and getting data to be used in templates

## Table of contents

<!-- toc -->

Verb uses data from package.json to render templates, but there are several other ways to add data. This document describes how Verb works with data, and the methods to used for setting and getting data.

## package.json

> Verb uses data from package.json to render templates, and more...

Verb passes the entire package.json object to the template engine to be used as context for templates. But sometimes this isn't enough. For example, you might have a template that requires a Twitter or GitHub username. 

### verb object

If your package.json file has a `verb` object with a `data` property, Verb will use it to extend the context.

**Example**

This example shows how you would add your Twitter username to package.json so that it will be used in templates:

```json
{ 
  "name": "my-project",
  "description": "It's awesome, seriously.",

  "verb": {
    "data": {
      "twitter": {"username": "jonschlinkert"}
    }
  }
}
```
Also see how to set [configuration values](./config.md) in package.json.