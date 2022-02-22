 require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "b637624b9b264b2482ddc21094382a6e"
          }
        });

        const view = new MapView({
          map: webmap,
          container: "viewDiv"
        });
      });
