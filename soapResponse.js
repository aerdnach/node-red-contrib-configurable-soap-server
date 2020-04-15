module.exports = function(RED) {
    function SoapServerResponseNode(config) {
      var thisNode = this;
      
      RED.nodes.createNode(thisNode, config);

      thisNode.on("input", function(msg) {
        var callback = msg["_soapServer_soapResponseCallback"];
        
        if (callback == null) {
          thisNode.warn("No previous soap server found for a soap server response.");
          return;
        }

        var payload = msg.payload;
        callback({payload});
      });
    }
    RED.nodes.registerType("soapserverResponse", SoapServerResponseNode);
  }
  // End of file
  