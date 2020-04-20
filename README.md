#  node-red-contrib-configurable-soap-server

Node-Red custom nodes to setup a SOAP Server (currently under development).

#  install

Clone this repo, then from node-red directory run *npm i path_where_you_clone_repo*. Otherwise run *npm i node-red-contrib-configurable-soap-server* in node-red directory.

Edit settings.js in node-red directory, set functionGlobalContext object as follow, or simply add *http* and *soap*:

```yaml
functionGlobalContext: {
  soap: require('soap'),
  http: require('http'),
}
```
Import *example_flow.json* to see in action a basic soap server. Use a soap client UI (eg. https://www.soapui.org/) to test the server, wsdl and sample request are in *example* folder. 

# Credits 
Neil Kolban [https://github.com/nkolban], for WSDL and base idea.