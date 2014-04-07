/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

exd = new Date();

var GraphD3SampleLineaA = Ext.create("S2M2.d3.DisplayGraphTime", {
    TabId: "A",
    NumStation: [150.541,148.551],
    StartTime: exd.getTime(),
    EndTime: exd.getTime() + 3600000,
    TransicionTime: 750,
    MinEjeY: 138,
    MaxEjeY: 164,
    RenderTo: '#ChartLineaA',
    SvgID: 'svgLineA',
    /*Estaciones: [{name: "NIQ", km: 0.0}, {name: "BEO", km: 1.402}, {name: "MAD", km: 2.976}, {name: "ACE", km: 4.862}, {name: "TRI", km: 6.139}, {name: "CAR", km: 7.613}, {name: "UNI", km: 8.883}, {name: "HOS", km: 9.741}, {name: "PRA", km: 10.587}, {name: "BER", km: 11.338}, {name: "SAA", km: 11.732}, {name: "ALP", km: 12.248}, {name: "XPO", km: 12.775}, {name: "IND", km: 13.762}, {name: "POB", km: 15.761}, {name: "CAT", km: 17.829}, {name: "AYU", km: 18.851}, {name: "ENV", km: 20.613}, {name: "ITA", km: 22.401}, {name: "BAN", km: 23.599}, {name: "STA", km: 24.861}],
    */
    Estaciones: [{name: "NIQ", km: 138.809}, {name: "BEO", km: 140.211}, {name: "MAD", km: 141.785}, {name: "ACE", km: 143.67}, {name: "TRI", km: 144.498}, {name: "CAR", km: 146.422}, {name: "UNI", km: 147.738}, {name: "HOS", km: 148.551}, {name: "PRA", km: 149.396}, {name: "BER", km: 150.147}, {name: "SAA", km: 150.541}, {name: "ALP", km: 151.057}, {name: "XPO", km: 151.583}, {name: "IND", km: 152.571}, {name: "POB", km: 154.57}, {name: "CAT", km: 156.638}, {name: "AYU", km: 157.66}, {name: "ENV", km: 159.422}, {name: "ITA", km: 161.212}, {name: "BAN", km: 162.408}, {name: "STA", km: 163.66}],
    PathInfoFlecha: {
            "lineas": [{
                "linea": [{
                    x: 1368986085000,
                    y: 150.541,
                    color: 'green'
                }, {
                    x: 1368986055000,
                    y: 150.541,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368986130000,
                    y: 150.541,
                    color: 'yellow'
                }, {
                    x: 1368986145000,
                    y: 150.541,
                    color: 'green'
                }]
            }, {                    
                "linea": [{
                    x: 1368987180000,
                    y: 150.541,
                    color: 'green'
                }, {
                    x: 1368987165000,
                    y: 150.541,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368987540000,
                    y: 150.541,
                    color: 'yellow'
                }, {
                    x: 1368987585000,
                    y: 150.541,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988275000,
                    y: 150.541,
                    color: 'green'
                }, {
                    x: 1368988185000,
                    y: 150.541,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368988620000,
                    y: 150.541,
                    color: 'yellow'
                }, {
                    x: 1368988605000,
                    y: 150.541,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988650000,
                    y: 150.541,
                    color: 'red'
                }, {
                    x: 1368988695000,
                    y: 150.541,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368989670000,
                    y: 150.541,
                    color: 'green'
                }, {
                    x: 1368989625000,
                    y: 150.541,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368989715000,
                    y: 150.541,
                    color: 'yellow'
                }, {
                    x: 1368989715000,
                    y: 150.541,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368990060000,
                    y: 150.541,
                    color: 'red'
                }, {
                    x: 1368990135000,
                    y: 150.541,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368990780000,
                    y: 150.541,
                    color: 'green'
                }, {
                    x: 1368990735000,
                    y: 150.541,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368991160000,
                    y: 150.541,
                    color: 'yellow'
                }, {
                    x: 1368991160000,
                    y: 150.541,
                    color: 'yellow'
                }]
            }]
        }
});

var GraphD3SampleLineaB = Ext.create("S2M2.d3.DisplayGraphTime", {
    TabId: "B", 
    NumStation: [5.581],
    StartTime: exd.getTime(),
    EndTime: exd.getTime() + 3600000,
    TransicionTime: 750,
    UpdateTime: 1000,
    MinEjeY: 0,
    MaxEjeY: 6,
    RenderTo: '#ChartLineaB',
    SvgID: 'svgLineB',
    Estaciones: [{name: "JAV", km: 0.0}, {name: "LUC", km: 1.175}, {name: "FLO", km: 1.883}, {name: "EST", km: 3.209}, {name: "SAM", km: 3.791}, {name: "CIS", km: 4.785}, {name: "SAB", km: 5.581}],
    PathInfoFlecha: {
            "lineas": [{
                "linea": [{
                    x: 1368986085000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368986055000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368986130000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368986145000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {                    
                "linea": [{
                    x: 1368987180000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368987165000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368987540000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368987585000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988275000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368988185000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368988620000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368988605000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988650000,
                    y: 11.832,
                    color: 'red'
                }, {
                    x: 1368988695000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368989670000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368989625000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368989715000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368989715000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368990060000,
                    y: 11.832,
                    color: 'red'
                }, {
                    x: 1368990135000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368990780000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368990735000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368991160000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368991160000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }]
        }
});

var GraphD3SampleLineaL1 = Ext.create("S2M2.d3.DisplayGraphTime", {
    TabId: "L1",
    NumStation: [88.22],
    StartTime: exd.getTime(),
    EndTime: exd.getTime() + 3600000,
    TransicionTime: 750,
    UpdateTime: 10000,
    MinEjeY: 0,
    MaxEjeY: 126.86,
    RenderTo: '#ChartLineaL1',
    SvgID: 'svgLineL1',
    Estaciones: [{name: "UDM", km: 0}, {name: "LPE", km: 4.76}, {name: "PAL", km: 9.44}, {name: "BEL", km: 14.37}, {name: "ROS", km: 20.66}, {name: "FAT", km: 25.75}, {name: "NUT", km: 30.69}, {name: "INB", km:  37.93}, {name: "PLM", km: 55.65}, {name: "CIB", km: 63.66}, {name: "MIN", km: 69.89}, {name: "CHG", km: 77.81}, {name: "UDA", km: 81.66}, {name: "HOB", km: 88.22}, {name: "PED", km: 92.12}, {name: "PVE", km: 97.30}, {name: "GAR", km: 103.69}, {name: "MAR", km: 109.93}, {name: "ESM", km: 115.75}, {name: "LIN", km: 120.89}, {name: "ARA", km: 126.86}],
    PathInfoFlecha: {
            "lineas": [{
                "linea": [{
                    x: 1368986085000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368986055000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368986130000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368986145000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {                    
                "linea": [{
                    x: 1368987180000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368987165000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368987540000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368987585000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988275000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368988185000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368988620000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368988605000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988650000,
                    y: 11.832,
                    color: 'red'
                }, {
                    x: 1368988695000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368989670000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368989625000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368989715000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368989715000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368990060000,
                    y: 11.832,
                    color: 'red'
                }, {
                    x: 1368990135000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368990780000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368990735000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368991160000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368991160000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }]
        }
});

var GraphD3SampleLineaL2 = Ext.create("S2M2.d3.DisplayGraphTime", {
    TabId: "L2",
    NumStation: [88.22],
    StartTime: exd.getTime(),
    EndTime: exd.getTime() + 3600000,
    TransicionTime: 750,
    UpdateTime: 10000,
    MinEjeY: 0,
    MaxEjeY: 126.86,
    RenderTo: '#ChartLineaL2',
    SvgID: 'svgLineL2',
    Estaciones: [{name: "UDM", km: 0}, {name: "LPE", km: 4.76}, {name: "PAL", km: 9.44}, {name: "BEL", km: 14.37}, {name: "ROS", km: 20.66}, {name: "FAT", km: 25.75}, {name: "NUT", km: 30.69}, {name: "INB", km:  37.93}, {name: "PLM", km: 55.65}, {name: "CIB", km: 63.66}, {name: "MIN", km: 69.89}, {name: "CHG", km: 77.81}, {name: "UDA", km: 81.66}, {name: "HOB", km: 88.22}, {name: "PED", km: 92.12}, {name: "PVE", km: 97.30}, {name: "GAR", km: 103.69}, {name: "MAR", km: 109.93}, {name: "ESM", km: 115.75}, {name: "LIN", km: 120.89}, {name: "ARA", km: 126.86}],
    PathInfoFlecha: {
            "lineas": [{
                "linea": [{
                    x: 1368986085000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368986055000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368986130000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368986145000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {                    
                "linea": [{
                    x: 1368987180000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368987165000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368987540000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368987585000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988275000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368988185000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368988620000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368988605000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368988650000,
                    y: 11.832,
                    color: 'red'
                }, {
                    x: 1368988695000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368989670000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368989625000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368989715000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368989715000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }, {
                "linea": [{
                    x: 1368990060000,
                    y: 11.832,
                    color: 'red'
                }, {
                    x: 1368990135000,
                    y: 11.732,
                    color: 'green'
                }]
            }, {
                "linea": [{
                    x: 1368990780000,
                    y: 11.832,
                    color: 'green'
                }, {
                    x: 1368990735000,
                    y: 11.732,
                    color: 'red'
                }]
            }, {
                "linea": [{
                    x: 1368991160000,
                    y: 11.832,
                    color: 'yellow'
                }, {
                    x: 1368991160000,
                    y: 11.732,
                    color: 'yellow'
                }]
            }]
        }
});

console.log(document.URL);

var ruta = "";


console.log("URL "+document.URL);

if (document.URL.indexOf("Rec") >= 0) {
    ruta = "RecProperties.json";
    GraphD3SampleLineaA.setModulo("Rec");
    GraphD3SampleLineaB.setModulo("Rec");
    GraphD3SampleLineaL1.setModulo("Rec");
    GraphD3SampleLineaL2.setModulo("Rec");
    console.log("Cogio las propiedades REC");
} else {
    ruta = "s2m2Properties.json"; 
    GraphD3SampleLineaA.setModulo("s2m2");
    GraphD3SampleLineaB.setModulo("s2m2");
    GraphD3SampleLineaL1.setModulo("s2m2");
    GraphD3SampleLineaL2.setModulo("s2m2");
};

d3.json("resources/app/properties/"+ruta, function(Properties) {
    
    GraphD3SampleLineaA.setUpdateTime(Properties.TiempoActualizacion);
    GraphD3SampleLineaB.setUpdateTime(Properties.TiempoActualizacion);
    GraphD3SampleLineaL1.setUpdateTime(Properties.TiempoActualizacion);
    GraphD3SampleLineaL2.setUpdateTime(Properties.TiempoActualizacion);
    
if (window.WebSocket) {

    var client, destination;
    //var url = "ws://localhost:61614/stomp";
    var url = "ws://localhost:61614";
    var login = "guest";
    var passcode = "guest";
    destination = "/topic/COMMON_STOMP";
    client = Stomp.client(url);
    client.connect(login, passcode, function(frame) {
        headers = {};
        headers.id = "sub-message-Client";
        headers.persistent = true;
        headers['activemq.prefetchSize'] = 5;
        headers['activemq.subscriptionName'] = "masterbcast";
        
        console.log("Websocket "+Properties.HoraActual);


        /*client.subscribe(Properties.TopicTransferencias, function(message) {

            //tableTransferStore = Ext.getStore('tableTransfer');
            //tableTransferStoreHis = Ext.getStore('tableTransferHis');

            Transferencias = eval("(" + message.body + ")");

            console.log("Transferencias");
            console.log(Transferencias);
            console.log("Transferencias");
            

        });*/

        client.subscribe("/topic/s2m2/recomendaciones", function(message) {
            var json = JSON.parse(message.body);
            console.log(numGraph);
            //Ext.Msg.alert('Aviso','se recomienda la acción al operador de '+json.linea+' Prolongacion(sg):'+json.recomendacion );   
            var linea;

            switch (numGraph){
            case 0:
              linea = "LA"
              break;
            case 1:
              linea = "LB"
              break;
            case 2:
              linea = "L1"
              break;
            case 3:
              linea = "L2"
              break;    
            }

            if (json.linea == linea) {
                Ext.Msg.alert('Aviso','se recomienda la acción al operador de '+json.linea+' Prolongacion(sg):'+json.recomendacion );
            } else{

            };

        });
        
  
        client.subscribe(Properties.HoraActual, function(message) {
            Actual = eval("(" + message.body + ")");
            console.log("Actual");
            console.log(Actual.t);
            console.log("Actual");

            GraphD3SampleLineaA.setStartTime(parseInt(Actual.t));
            GraphD3SampleLineaA.setEndTime(parseInt(Actual.t) + 3600000);
            GraphD3SampleLineaA.setTimeUnix(parseInt(Actual.t));
            
            GraphD3SampleLineaB.setStartTime(parseInt(Actual.t));
            GraphD3SampleLineaB.setEndTime(parseInt(Actual.t) + 3600000);
            GraphD3SampleLineaB.setTimeUnix(parseInt(Actual.t));
            
            GraphD3SampleLineaL1.setStartTime(parseInt(Actual.t));
            GraphD3SampleLineaL1.setEndTime(parseInt(Actual.t) + 3600000);
            GraphD3SampleLineaL1.setTimeUnix(parseInt(Actual.t));

            GraphD3SampleLineaL2.setStartTime(parseInt(Actual.t));
            GraphD3SampleLineaL2.setEndTime(parseInt(Actual.t) + 3600000);
            GraphD3SampleLineaL2.setTimeUnix(parseInt(Actual.t));
            /*jQuery.each(Real, function(key, val) {
                if (key === "LA") {
                    //console.log("////////////////////////////////////////PathInfoReal////////////////////////////////////////////////////////////");
                    //console.log(val);
                    //console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
                    GraphD3SampleLineaA.setPathInfoReal(val);
                    //GraphD3SampleLineaL1.setPathInfoReal(val);
                } else {
                    GraphD3SampleLineaB.setPathInfoReal(val);
                }
                ;
            });*/

        });


        client.subscribe(Properties.HorarioReal, function(message) {
            Real = eval("(" + message.body + ")");
            jQuery.each(Real, function(key, val) {
                if (key === "LA") {
                    //console.log("////////////////////////////////////////PathInfoReal////////////////////////////////////////////////////////////");
                    //console.log(val);
                    //console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
                    GraphD3SampleLineaA.setPathInfoReal(val);
                    //GraphD3SampleLineaL1.setPathInfoReal(val);
                } else {
                    GraphD3SampleLineaB.setPathInfoReal(val);
                }
                ;
            });

        });

        client.subscribe(Properties.HorarioTeorico, function(message) {
            var str = message.body;
            teorico = eval("(" + str + ")");
            
            var d = new Date();
            if (document.URL.indexOf("Rec") < 0) 
                Ext.Msg.alert('Aviso','Actualizaci\xf3n del Plan de Explotaci\xf3n de Trenes a las '+d.getHours()+':'+d.getMinutes()+' del '+d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()+'.'); 
        
            jQuery.each(teorico, function(key, val) {
          
                if (key === "LA") {
                    GraphD3SampleLineaA.setPathInfoTeorica(val);
                    console.log("entro a LA");
                    console.log(teorico);
                    //GraphD3SampleLineaL1.setPathInfoTeorica(val);
                } else {
                    GraphD3SampleLineaB.setPathInfoTeorica(val);
                    console.log(teorico);
                    //GraphD3SampleLineaL1.setPathInfoSecundarias(linea_sec);
                };
            });

        });
        var previstoTren={};
        client.subscribe(Properties.HorarioEstimado, function(message) {
            Previsto = eval("(" + message.body + ")");
            console.log(Previsto);
            var linea;
            
            //GraphD3SampleLineaL1.setPrevistosTrenes(Previsto);
            //GraphD3SampleLineaL2.setPrevistosTrenes(Previsto);
            
            var linea_sec = {};
            for (key in Previsto) {
                linea = key;
                
                if (linea == "LA") {
                   // kms_trans = [150.541];
                    //kms_secundario = [5.581];
                    
                    kms_trans = Properties.kms_trans_LA; //SAA - HOS
                    //kms_secundario = [5.581,88.22,37.93]; //SAB - HOB - INB
                    kms_secundario = Properties.kms_secundario_LA; //SAB - HOB
                    console.log(kms_trans);
                    lineas_trans=["LB","L1"];
                    previstoTren["LA"]=Previsto["LA"]

                }
                if (linea == "LB") {
                    //kms_trans = [5.581];
                    //kms_secundario = [150.541];
                    kms_trans = Properties.kms_trans_LB; //SAA - HOS
                    //kms_secundario = [5.581,88.22,37.93]; //SAB - HOB - INB
                    kms_secundario = Properties.kms_secundario_LB; //SAB - HOB
                   
                    lineas_trans=["LA","L1"];
                    console.log(kms_trans);
                    previstoTren["LB"]=Previsto["LB"]


                }
                console.log("*************previstoTren************");
                
                Previsto=previstoTren;
                console.log(Previsto);
            }
            for (key in Previsto) {    
                linea = key;
                console.log("key linea "+linea);
                var ser_sec = {};
                for(var key_trans in kms_trans){
                    ser_sec[key_trans] = [];
                }
                //recorro los servicios de cada linea                
                for (var j = 0; j < Previsto[linea].length; j++) {
                    
                    /*
                    var secLA = [];
                    var secLB = [];
                    var secL1 = [];*/
                    //recorro los puntos kilometricos de transferencia dependiendo desde donde se vería la secundaria
                    for(var key_trans in kms_trans){
                        //contenedor de las secundarias por servicio(se debe inicializar para cada servicio)
                        var ser_sec_tramo = {};
                        var sec = [];

                        //recorro cada servicio y busco por los "y" igual al valor de la estación de tranferencia
                        //console.log(Previsto[linea][j]);
                        for (name in Previsto[linea][j]["r"]) {
                            //recorro los puntos kilometricos donde hay transferencia y obtengo los tramos de lineas donde hay transferencias
                            
                            for(var k = 0; k < kms_trans[key_trans].length; k++){
                                if (Previsto[linea][j]["r"][name]["y"] == kms_trans[key_trans][k]) {
                                    //console.log(name);
                                    int_name = parseInt(name);
                                    //contenedor de los puntos consecutivos que tengan "y" igual al valor de la estación de tranferencia


                                    //si hay puntos consecutivos con el mismo "y", entonces es una linea más para el servicio secundario
                                    //Evita que si está en la ultima posicion no saque error al no encontrar el y
                                    if ((int_name + 1) < Previsto[linea][j]["r"].length)
                                    {
                                        //si el "y" consecutivo tiene el mismo valor entonces hace parte de la pareja
                                        if (Previsto[linea][j]["r"][int_name + 1]["y"] == kms_trans[key_trans][k]) {
                                            //definicion de los puntos de origen y final del tramo
                                            tramo_xo = parseFloat(Previsto[linea][j]["r"][name]["x"]);
                                            tramo_xd = parseFloat(Previsto[linea][j]["r"][int_name + 1]["x"]);
                                            tramo_y = kms_secundario[key_trans][k];
                                            //valores para crear los offset en "y" y en "x"(deberían ser configurables)
                                            des_x = 5000;
                                            des_y = 0.005;
                                            offset_y = 0.1;
                                            //definición de las pestañas ASC o DES
                                            if (int_name != 0) {
                                                if (Previsto[linea][j]["r"][int_name - 1]["y"] < Previsto[linea][j]["r"][int_name]["y"]) {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y + des_y + offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y - des_y + offset_y).toFixed(3))}
                                                    ];

                                                } else {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y - des_y - offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y + des_y - offset_y).toFixed(3))}
                                                    ];
                                                }
                                            //este else me permite detectar si es ASC o DES cuando es el primer punto, ya que no podríatener como indice -1
                                            } else if (int_name == 0) {
                                                if (Previsto[linea][j]["r"][int_name + 2]["y"] > Previsto[linea][j]["r"][int_name + 1]["y"]) {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y + des_y + offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y - des_y + offset_y).toFixed(3))}
                                                    ];

                                                } else {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y - des_y - offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y + des_y - offset_y).toFixed(3))}
                                                    ];
                                                }
                                            }
                                            if(Previsto[linea][j]["r"][int_name]["x"]>=1368987180000 && Previsto[linea][j]["r"][int_name]["x"]<=1368991160000)
                                                {console.log("flechas");
                                                  console.log(Previsto[linea][j]["s"]);  
                                                }
                                            //Adiciono los tramos de secundarias
                                            sec.push(sec_tramo);
                                           /* if(lineas_trans[k]=="LA")
                                                secLA.push(sec_tramo);
                                            else if(lineas_trans[k]=="LB")
                                                secLB.push(sec_tramo);
                                             else if(lineas_trans[k]=="L1")
                                                secL1.push(sec_tramo);*/
                                        }
                                    }
                                }
                            }
                            
                        }
                        //creo el objeto con //console.log(sec);
                        //console.log(ser_sec_tramo.r);
                        //las secundarias por servicio
                        ser_sec_tramo.r = sec;
                        ser_sec_tramo.s = linea+"-"+Previsto[linea][j]["s"];
                        ser_sec[key_trans].push(ser_sec_tramo);
                        //ser_sec[linea].push(ser_sec_tramo);
                        ////console.log(ser_sec_tramo);
                    }
                    
                    //linea_sec[linea]= {};
                    

                }

            
                for(var key_trans in kms_trans){
                    console.log("********************long sec********************");
                    console.log(linea_sec[key_trans]);
                    console.log("********************long sec********************");
                    if(typeof(linea_sec[key_trans]) != "undefined"){
                        console.log("********************entro********************");
                        linea_sec[key_trans].ss = linea_sec[key_trans].ss.concat(ser_sec[key_trans]);
                    }else{
                        linea_sec[key_trans]={};
                                              
                        linea_sec[key_trans].ss = ser_sec[key_trans];
                        console.log("********************llenar sec********************");
                        console.log(linea_sec);
                        console.log("********************llenar sec********************");
                    //linea_serv_tot.push(linea_sec);
                    }   
                }
            }
            // console.log("*************linea sec la-lb*******************+"); 
            // console.log(linea_sec["LA"]["LB"]);
            // console.log("*************linea sec la-lc*******************+"); 
            // console.log(linea_sec["LA"]["LC"]["ss"]);
            // console.log("*************linea sec unida*******************+");    
            
            // console.log(linea_sec["LA"]["LB"]["ss"].concat(linea_sec["LA"]["LC"]["ss"]));
            // console.log("*************linea sec unida*******************+");


            //se concatenan los vectores , revisar aca ya que el vector podria estar vacio y sacar error
            if(typeof(linea_sec["LA"]) != "undefined"){
                GraphD3SampleLineaA.setPathInfoSecundariasTren(linea_sec["LA"]["ss"]);
            }
            if(typeof(linea_sec["LB"]) != "undefined"){
                GraphD3SampleLineaB.setPathInfoSecundariasTren(linea_sec["LB"]["ss"]);
            }
            if(typeof(linea_sec["L1"]) != "undefined"){
                GraphD3SampleLineaL1.setPathInfoSecundariasTren(linea_sec["L1"]["ss"]);
            }
            if(typeof(linea_sec["L2"]) != "undefined"){
                GraphD3SampleLineaL2.setPathInfoSecundariasTren(linea_sec["L2"]["ss"]);
            }
            

            jQuery.each(Previsto, function(key, val) {
                console.log("linea sec");
                console.log(linea_sec);
                console.log("linea sec"); 
                if (key === "LA") {
                    
                    GraphD3SampleLineaA.setPathInfoEstimada(val);
                    //GraphD3SampleLineaB.setOriginLine("LA");
                    
                } else  {
                    GraphD3SampleLineaB.setPathInfoEstimada(val);
                    //GraphD3SampleLineaB.setOriginLine("LB");
                    
                    
                }
                ;
            });

        });
        
        /////////////////////////////////////////////////////////////////////////
        
        client.subscribe(Properties.HorarioEstimadoT, function(message) {
            Previsto = eval("(" + message.body + ")");
            var linea;
            PrevistoObject={};
            function keysLineatren(element,index,array){PrevistoObject[d3.keys(element)[0]]=array[index][d3.keys(element)[0]]; }
            Previsto.forEach(keysLineatren);
            console.log("***********PrevistoObject***************");
            console.log(PrevistoObject);
            Previsto=PrevistoObject;
            //para que es esto????
            GraphD3SampleLineaL1.setPrevistosTrenes(Previsto);
            GraphD3SampleLineaL2.setPrevistosTrenes(Previsto);
            
            
            var linea_sec = {};
            for (key in Previsto) {
                linea = key;
                console.log("key linea "+linea);
                if (linea == "L1") {
                   // kms_trans = [150.541];
                    //kms_secundario = [5.581];
                    
                    kms_trans = Properties.kms_trans_L1; //SAA - HOS
                    //kms_secundario = [5.581,88.22,37.93]; //SAB - HOB - INB
                    kms_secundario = Properties.kms_secundario_L1; //SAB - HOB
                    console.log(kms_trans);
                    lineas_trans=["LB","L1"];
                }
                if (linea == "L2") {
                    //kms_trans = [5.581];
                    //kms_secundario = [150.541];
                    kms_trans = Properties.kms_trans_L2; //SAA - HOS
                    //kms_secundario = [5.581,88.22,37.93]; //SAB - HOB - INB
                    kms_secundario = Properties.kms_secundario_L2; //SAB - HOB
                   
                    lineas_trans=["LA","L1"];
                    console.log(kms_trans);


                }
                
                
            
            

                 //console.log(km_secundario);

                
                var ser_sec = {};
                for(var key_trans in kms_trans){
                    ser_sec[key_trans] = [];
                }
                //recorro los servicios de cada linea                
                for (var j = 0; j < Previsto[linea].length; j++) {
                    
                    /*
                    var secLA = [];
                    var secLB = [];
                    var secL1 = [];*/
                    //recorro los puntos kilometricos de transferencia dependiendo desde donde se vería la secundaria
                    for(var key_trans in kms_trans){
                        //contenedor de las secundarias por servicio(se debe inicializar para cada servicio)
                        var ser_sec_tramo = {};
                        var sec = [];

                        //recorro cada servicio y busco por los "y" igual al valor de la estación de tranferencia
                        //console.log(Previsto[linea][j]);
                        for (name in Previsto[linea][j]["r"]) {
                            //recorro los puntos kilometricos donde hay transferencia y obtengo los tramos de lineas donde hay transferencias
                            
                            for(var k = 0; k < kms_trans[key_trans].length; k++){
                                if (Previsto[linea][j]["r"][name]["y"] == kms_trans[key_trans][k]) {
                                    //console.log(name);
                                    int_name = parseInt(name);
                                    //contenedor de los puntos consecutivos que tengan "y" igual al valor de la estación de tranferencia


                                    //si hay puntos consecutivos con el mismo "y", entonces es una linea más para el servicio secundario
                                    //Evita que si está en la ultima posicion no saque error al no encontrar el y
                                    if ((int_name + 1) < Previsto[linea][j]["r"].length)
                                    {
                                        //si el "y" consecutivo tiene el mismo valor entonces hace parte de la pareja
                                        if (Previsto[linea][j]["r"][int_name + 1]["y"] == kms_trans[key_trans][k]) {
                                            //definicion de los puntos de origen y final del tramo
                                            tramo_xo = parseFloat(Previsto[linea][j]["r"][name]["x"]);
                                            tramo_xd = parseFloat(Previsto[linea][j]["r"][int_name + 1]["x"]);
                                            tramo_y = kms_secundario[key_trans][k];
                                            //valores para crear los offset en "y" y en "x"(deberían ser configurables)
                                            des_x = 5000;
                                            des_y = 0.005;
                                            offset_y = 0.1;
                                            //definición de las pestañas ASC o DES
                                            if (int_name != 0) {
                                                if (Previsto[linea][j]["r"][int_name - 1]["y"] < Previsto[linea][j]["r"][int_name]["y"]) {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y + des_y + offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y - des_y + offset_y).toFixed(3))}
                                                    ];

                                                } else {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y - des_y - offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y + des_y - offset_y).toFixed(3))}
                                                    ];
                                                }
                                            //este else me permite detectar si es ASC o DES cuando es el primer punto, ya que no podríatener como indice -1
                                            } else if (int_name == 0) {
                                                if (Previsto[linea][j]["r"][int_name + 2]["y"] > Previsto[linea][j]["r"][int_name + 1]["y"]) {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y + des_y + offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd, "y": tramo_y + offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y - des_y + offset_y).toFixed(3))}
                                                    ];

                                                } else {
                                                    var sec_tramo = [
                                                        {"x": tramo_xo - des_x, "y": parseFloat((tramo_y - des_y - offset_y).toFixed(3))},
                                                        {"x": tramo_xo, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd, "y": tramo_y - offset_y},
                                                        {"x": tramo_xd + des_x, "y": parseFloat((tramo_y + des_y - offset_y).toFixed(3))}
                                                    ];
                                                }
                                            }
                                            if(Previsto[linea][j]["r"][int_name]["x"]>=1368987180000 && Previsto[linea][j]["r"][int_name]["x"]<=1368991160000)
                                                {console.log("flechas");
                                                  console.log(Previsto[linea][j]["s"]);  
                                                }
                                            //Adiciono los tramos de secundarias
                                            sec.push(sec_tramo);
                                           /* if(lineas_trans[k]=="LA")
                                                secLA.push(sec_tramo);
                                            else if(lineas_trans[k]=="LB")
                                                secLB.push(sec_tramo);
                                             else if(lineas_trans[k]=="L1")
                                                secL1.push(sec_tramo);*/
                                        }
                                    }
                                }
                            }
                            
                        }
                        //creo el objeto con //console.log(sec);
                        //console.log(ser_sec_tramo.r);
                        //las secundarias por servicio
                        ser_sec_tramo.r = sec;
                        ser_sec_tramo.s = linea+"-"+Previsto[linea][j]["s"];
                        ser_sec[key_trans].push(ser_sec_tramo);
                        //ser_sec[linea].push(ser_sec_tramo);
                        ////console.log(ser_sec_tramo);
                    }
                    
                    //linea_sec[linea]= {};
                    

                }

            
                for(var key_trans in kms_trans){
                    console.log("********************long sec********************");
                    console.log(linea_sec[key_trans]);
                    console.log("********************long sec********************");
                    if(typeof(linea_sec[key_trans]) != "undefined"){
                        console.log("********************entro********************");
                        linea_sec[key_trans].ss = linea_sec[key_trans].ss.concat(ser_sec[key_trans]);
                    }else{
                        linea_sec[key_trans]={};
                                              
                        linea_sec[key_trans].ss = ser_sec[key_trans];
                        console.log("********************llenar sec********************");
                        console.log(linea_sec);
                        console.log("********************llenar sec********************");
                    //linea_serv_tot.push(linea_sec);
                    }   
                }
            }
            
            //se concatenan los vectores , revisar aca ya que el vector podria estar vacio y sacar error
            if(typeof(linea_sec["LA"]) != "undefined"){
                GraphD3SampleLineaA.setPathInfoSecundariasBus(linea_sec["LA"]["ss"]);
            }
            if(typeof(linea_sec["LB"]) != "undefined"){
                GraphD3SampleLineaB.setPathInfoSecundariasBus(linea_sec["LB"]["ss"]);
            }
            if(typeof(linea_sec["L1"]) != "undefined"){
                GraphD3SampleLineaL1.setPathInfoSecundariasBus(linea_sec["L1"]["ss"]);
            }
            if(typeof(linea_sec["L2"]) != "undefined"){
                GraphD3SampleLineaL2.setPathInfoSecundariasBus(linea_sec["L2"]["ss"]);
            }
            
           
            
            jQuery.each(Previsto, function(key, val) {
                console.log("linea sec");
                console.log(linea_sec);
                console.log("*************linea sec*******************+"); 
                
                

                
                if (key === "L1") {
                    console.log("////////////////////////////////////////PathInfoEstimadaL1////////////////////////////////////////////////////////////");
                    console.log(val);
                    console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
                    
                    //eval("GraphD3SampleLinea"+"C"+".setPathInfoEstimada(val);");
                    GraphD3SampleLineaL1.setPathInfoEstimada(val);
                                    
                         
                    
                    //GraphD3SampleLineaL1.setPathInfoSecundarias(linea_sec);
                    //GraphD3SampleLineaL1.setPathInfoEstimada(val);
                } else if (key === "L2")  {
                    console.log("////////////////////////////////////////PathInfoEstimadaL2////////////////////////////////////////////////////////////");
                    console.log(val);
                    console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
                    
                    GraphD3SampleLineaL2.setPathInfoEstimada(val);
                    //GraphD3SampleLineaA.setPathInfoSecundarias(linea_sec["L2"]["LA"]);
                    
                    
                    
                }
                ;
            });

        });
            console.log("Propiedad Horario Real"+Properties.HorarioRealT);
        client.subscribe(Properties.HorarioRealT, function(message) {
            Real = eval("(" + message.body + ")");


            jQuery.each(Real, function(key, val) {
                //console.log("////////////////////// Real bus//////////////////");
                 //console.log(val);
                 //console.log("////////////////////// Real bus//////////////////");
                if (d3.keys(val)[0] === "L1") {
                    //console.log("////////////////////////////////////////PathInfoReal////////////////////////////////////////////////////////////");
                    //console.log(val);
                    //console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
                    //console.log("////////////////////// entro//////////////////"+d3.keys(val)[0]);
                    
                    GraphD3SampleLineaL1.setPathInfoReal(val.L1);
                    
                } else if(d3.keys(val)[0] === "L2")  {
                    //console.log("////////////////////// entro//////////////////"+d3.keys(val)[0]);
                    //console.log(val);
                    GraphD3SampleLineaL2.setPathInfoReal(val.L2);
                    
                    
                }
                ;
            });

        });

        client.subscribe(Properties.HorarioTeoricoT, function(message) {

            var d = new Date();
            if (document.URL.indexOf("Rec") < 0) 
                Ext.Msg.alert('Aviso','Actualizaci\xf3n del Plan de Explotaci\xf3n de Buses a las '+d.getHours()+':'+d.getMinutes()+' del '+d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()+'.'); 
            
            teorico = eval("(" + message.body + ")");
            
            jQuery.each(teorico, function(key, val) {
                 console.log("////////////////////// teorica bus//////////////////");
                 console.log(val);
                 console.log("////////////////////// teorica bus//////////////////");
                if (key === "L1") {
                    GraphD3SampleLineaL1.setPathInfoTeorica(val);
                } else {
                    //GraphD3SampleLineaL1.setPathInfoSecundarias(linea_sec);
                    GraphD3SampleLineaL2.setPathInfoTeorica(val);
                }
                ;
            });

        });
           
        /////////////////////////////////////////////////////////////////////////
        
        
        client.subscribe(Properties.TopicTransferencias, function(message) {

            tableTransferStore = Ext.getStore('tableTransfer');
            tableTransferStoreHis = Ext.getStore('tableTransferHis');

            Transferencias = eval("(" + message.body + ")");

            console.log("Transferencias");
            console.log(Transferencias);
            console.log("Transferencias");

            while (tableTransferStore.getCount(0) > 0)
                    tableTransferStore.removeAt(0);

                  flechaActivasLA=[];
                  flechaActivasLB=[];
                  flechaActivasL1=[];
                

                   console.log("Transferenciasddd");
                    console.log(GraphD3SampleLineaB.getDivElem());
                  console.log("Transferenciasdddd"); 

            if( GraphD3SampleLineaA.getDivElem() != ''){
                 //seteo la informacion de un atributo de la clase
                GraphD3SampleLineaA.setPathInfoFlecha([]);
                GraphD3SampleLineaA.refresh();
            }

            if( GraphD3SampleLineaB.getDivElem() != ''){
                GraphD3SampleLineaB.setPathInfoFlecha([]);
                GraphD3SampleLineaB.refresh();
            }

            if( GraphD3SampleLineaL1.getDivElem() != ''){
                 //seteo la informacion de un atributo de la clase
                GraphD3SampleLineaL1.setPathInfoFlecha([]);
                GraphD3SampleLineaL1.refresh();
            }

            if( GraphD3SampleLineaL2.getDivElem() != ''){
                 //seteo la informacion de un atributo de la clase
                GraphD3SampleLineaL2.setPathInfoFlecha([]);
                GraphD3SampleLineaL2.refresh();
            }
            
            tableTransferStore.add(Transferencias["transferencias"]);
                  //tableTransferStore=Transferencias["transferencias"];
                  tableTransferStoreHis.add(Transferencias["transferencias"]);
            

        });
        

        client.send("/queue/INIT_REQUEST", {priority: 9}, "Initial Request");
    });
}


Ext.define('S2M2.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'auto',
    requires: [
        'S2M2.view.tableTransfer.List',
        'S2M2.view.tableTransfer.Edit',
        'S2M2.view.graph.tabs',
        'S2M2.view.graph.tools',
        'S2M2.view.editorStations.ItemSelector',
        'S2M2.view.editorStations.ItemSelectorLinea1',
        'S2M2.view.editorStations.ItemSelectorBusL2',
        'S2M2.view.editorStations.ItemSelectorLineaB'

    ],
    initComponent: function() {

        Ext.apply(this, {
            items: [
                {
                    xtype: 'panel',
                    region:'center',
                    id:'centerPanel',
                    margins:'5 0 0 0',
                    layout: 'fit',
                    html: '<header><div id="DatosUsuario"><span id="TituloApp"> S2M2 </span><span id="NameUser"></span></div><div id="headerDer"></div><div id="headerIzq"></div><div id="messages"></div></header>',
                },
                {
                    xtype: 'tabs',
                    title: '',
                    renderTo: Ext.getBody(),
                    dockedItems: [{
                            dock: 'top',
                            xtype: 'tabTools',
                            items: [{
                                    text: 'Docked to the top'
                                }]
                        }],
                    activeTab: 0,
                    //width: 600,
                    height: 815,
                    //plain: true,

                    region: 'center',
                    items: [
                        {
                            id: 'TabLineaA',
                            title: 'L&iacute;nea A',
                            html: '<div id="ChartLineaA"></div>',
                            listeners: {
                                render: function(abstractcomponent, options) {
                                    //correccion error php LC
                                    // jQuery.ajax({
                                    //     //data: Estations,
                                    //     type: "POST",
                                    //     dataType: "json",
                                    //     url: "control/ctrlReadEstations.php",
                                    //     success: function(data) {
                                    //         console.log(data);
                                    //         if (data != null) {
                                    //             GraphD3SampleLineaA.setEstaciones(data);
                                    //         } else {
                                    //             console.log('Fallo');
                                    //         }
                                    //         ;
                                    //     }
                                    // });

                                    GraphD3SampleLineaA.display();
                                },
                                activate: function(abstractcomponent, options) {
                                    numGraph = 0;
                                }
                            }
                        }, {
                            id: 'TabLineaB',
                            title: 'L&iacute;nea B',
                            html: '<div id="ChartLineaB"></div>',
                            listeners: {
                                render: function(abstractcomponent, options) {
                                    //correccion error php LC
                                    // jQuery.ajax({
                                    //     //data: Estations,
                                    //     type: "POST",
                                    //     dataType: "json",
                                    //     url: "control/ctrlReadEstationsLineaB.php",
                                    //     success: function(data) {
                                    //         console.log(data);
                                    //         if (data != null) {
                                    //             GraphD3SampleLineaB.setEstaciones(data);
                                    //         } else {
                                    //             console.log('Fallo');
                                    //         }
                                    //         ;
                                    //     }
                                    // });
                                    GraphD3SampleLineaB.display();
                                },
                                activate: function(abstractcomponent, options) {
                                    numGraph = 1;

                                }
                            }
                        }, {
                            id: 'TabBuses',
                            title: 'L&iacute;nea 1',
                            html: '<div id="ChartLineaL1"></div>',
                            listeners: {
                                render: function(abstractcomponent, options) {
                                    //correccion error php LC
                                    // jQuery.ajax({
                                    //     //data: Estations,
                                    //     type: "POST",
                                    //     dataType: "json",
                                    //     url: "control/ctrlReadEstationsBus.php",
                                    //     success: function(data) {
                                    //         console.log(data);
                                    //         if (data != null) {
                                    //             GraphD3SampleLineaL1.setEstaciones(data);
                                    //         } else {
                                    //             console.log('Fallo');
                                    //         }
                                    //         ;
                                    //     }
                                    // });

                                    GraphD3SampleLineaL1.display();
                                },
                                activate: function(abstractcomponent, options) {
                                    numGraph = 2;

                                }
                            }
                        }, {
                            id: 'TabBuses2',
                            title: 'L&iacute;nea 2',
                            html: '<div id="ChartLineaL2"></div>',
                            listeners: {
                                render: function(abstractcomponent, options) {
                                    /*jQuery.ajax({
                                        //data: Estations,
                                        type: "POST",
                                        dataType: "json",
                                        url: "control/ctrlReadEstationsBus.php",
                                        success: function(data) {
                                            console.log(data);
                                            if (data != null) {
                                                GraphD3SampleLineaL2.setEstaciones(data);
                                            } else {
                                                console.log('Fallo');
                                            }
                                            ;
                                        }
                                    });*/

                                    GraphD3SampleLineaL2.display();
                                },
                                activate: function(abstractcomponent, options) {
                                    numGraph = 3;

                                }
                            }
                        }, {
                            id: 'TabLineaF',
                            title: 'Transferencias',
                            listeners: {
                                activate: function(abstractcomponent, options) {
                                    numGraph = 4;
                                }
                            },
                            items: [
                                {
                                    xtype: 'transferlist',
                                    height: 500
                                }
                            ]
                        },
                        {
                            id: 'usuarios',
                            title: 'Historicos',
                            listeners: {
                                activate: function(abstractcomponent, options) {
                                    numGraph = 5;
                                }
                            },
                            items: [
                                {
                                    xtype: 'tableTransferHis',
                                    height: 500
                                }
                            ]
                        }
                    ]

                }]
        });

        this.callParent();
    }
});

});
