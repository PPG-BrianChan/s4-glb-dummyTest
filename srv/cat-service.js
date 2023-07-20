const { executeHttpRequest } = require('@sap-cloud-sdk/core');
const { retrieveJwt } = require("@sap-cloud-sdk/core");
const cds = require('@sap/cds')

module.exports = (srv) => {
    srv.on('READ', 'Books', async (req) => {
        // try {
        //     var jwt = getJWT(req);
        //     console.log("Jwt:",jwt)
        //     await executeHttpRequest(
        //         {
        //             destinationName: "S4_On_Premise_Principal_GT1", jwt : jwt
        //         },
        //         {
        //             method: 'GET',
        //             url: "/sap/opu/odata/sap/ZBR_API_DUMMY_O2/ZC_DummyBR"
        //         }
        //     )
        // } catch (error) {
        //     if (error.response.data) {
        //         console.log('Error during axios call:', error.response.data)
        //     }
        //     console.log(error.message)
        //     console.log(Object.keys(error))
        //     console.log(error.cause);
        // }
        try{
        const conn = await cds.connect.to('ZBR_API_DUMMY_O2');
        const postResult = await conn.send(
            { method: 'POST', path: `/Test` }
        )
        console.log('POST performed successfully')
        }catch(error){
            console.log(error.message)
            console.log(error.cause)
        }
    })

    function getJWT(req) {
        if (typeof req._ !== "undefined") {
          return retrieveJwt(req._.req);
        } else {
          return "";
        }
      }
}
