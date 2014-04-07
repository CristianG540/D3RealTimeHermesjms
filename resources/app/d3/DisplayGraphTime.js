
function Grafica(TabId, NumStation, StartTime, EndTime, TransicionTime, MinEjeY, MaxEjeY, RenderTo, SvgID, Estaciones, UpdateTime) {

    this.BoolClickText = true;
    this.Context = '';
    this.CopyX ='';
    this.CopyY ='';
    this.DivElem = '';
    this.DivLabel = '';
    this.DivToolTip = '';
    this.EndTime = EndTime;
    this.EjeX = '';
    this.EjeY = '';
    this.Estaciones = Estaciones;
    this.Exd = new Date();
    this.GroupText = '';
    this.GroupLabelSvg = '';
    this.GRectangleLabel = '';
    this.Focus = '';
    this.Height = '';
    this.IniReal = true;
    this.LabelEstations = "";
    this.Legend ='';
    this.LimitZoomX =0;
    this.LimitZoomY =0;
    this.Linea = function() {};
    this.Margin = '';
    this.MinEjeY = MinEjeY;
    this.MaxEjeY = MaxEjeY;
    this.NumStation = NumStation;
    this.onClickText = '';
    this.PathInfoEstimada = '';
    this.PathInfoTeorica = '';
    this.PathInfoReal = '';
    this.RenderTo = RenderTo;
    this.RealTime = true;
    this.RealTimeEvent = true;
    this.Scale = 10;
    this.StartTime = StartTime;
    this.Svg = '';
    this.SvgID = SvgID;
    this.TabId = TabId;
    this.TextLabelSvg = '';
    this.TransicionTime = TransicionTime;
    this.TimeUnix = '';
    this.UpdateTime = UpdateTime;
    this.VanDblClick = 0;
    this.Width = '';
    this.X = function() {};
    this.Y = function() {};
    this.ZoomB = '';
    this.ImageArray ='';

    this.cssConfig = function() {

        d3.select("#text_hour"+this.TabId)
            .style("font-weight", 600)
            .style("text-decoration", "underline");

        d3.selectAll(".label"+this.TabId)
            .style("background-color", "#D90000")
            .style("color", "#FFFFFF")
            .style("width", "auto");

        d3.selectAll(".linea"+this.TabId)
            .style("fill", "none")
            .style("stroke", "steelblue")
            .style("stroke-width", "1.5px");

        d3.selectAll(".list"+this.TabId)
            .style("padding-left", "16px")
            .style("padding-bottom", "10px");

        d3.selectAll(".list"+this.TabId)
            .style("padding-left", "16px")
            .style("padding-bottom", "10px");

        d3.selectAll(".list"+this.TabId+" li")
            .style("list-style", "square")
            .style("padding", "2px");

        d3.selectAll(".legend"+this.TabId+" rect")
            .style("fill", "white")
            .style("stroke", "black")
            .style("opacity", 0.8);
    };

    this.hora = function() {
        var scope = this;
        var fecha;
        if (scope.TimeUnix == '') {
            fecha = new Date();
        } else{
            fecha = new Date(scope.TimeUnix);
        };

        /*console.log("fecha");
         console.log(fecha);
         console.log("fecha");*/
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        var segundo = fecha.getSeconds();

        if (hora < 10) {
            hora = "0" + hora;
        }
        if (minuto < 10) {
            minuto = "0" + minuto;
        }
        if (segundo < 10) {
            segundo = "0" + segundo;
        }
        var horaFinal = hora + ':' + minuto + ':' + segundo ;
        return horaFinal;
    };

    this.refresh = function() {
        var scope = this; // defino esta variable para tener acceso a las funciones y propiedades de la clase.

        var MaxX = scope.X.domain()[1].getTime();
        var MinX = scope.X.domain()[0].getTime();

        var MaxY = scope.Y.domain()[1];
        var MinY = scope.Y.domain()[0];

        //Limita el zoom cuando se realiza atraves del evento dobleclick, y se debe de realizar una s¡ en movimiento continue haciendolo
        if(scope.VanDblClick==1){
            if((MaxY-MinY)<=scope.LimitZoomY){
                MinY=scope.CopyY;
                MaxY=MinY+scope.LimitZoomY;
                scope.ZoomB.y(scope.Y.domain([MinY, MaxY]));
            }
            //revisa si supero el limite en el eje X
            if((MaxX-MinX)<=scope.LimitZoomX){
                MinX=scope.CopyX;
                MaxX=MinX+scope.LimitZoomX;
                scope.ZoomB.x(scope.X.domain([MinX, MaxX]));
            }
            scope.VanDblClick=0;
        }

        // refresca los ejes
        scope.Svg.select(".y.axis")
            .call(scope.EjeY.orient('left'));

        scope.Svg.select("#ejeYRight"+scope.TabId)
            .call(scope.EjeY.orient('right'));

        scope.Svg.select(".x.axis")
            .call(scope.EjeX.orient("bottom"));

        scope.Svg.select("#ejeXtop"+scope.TabId)
            .call(scope.EjeX.orient("top"));

        scope.Svg.select("#line_with_hour"+scope.TabId)
            .attr("x1", scope.X(scope.TimeUnix))
            .attr("x2", scope.X(scope.TimeUnix));

        scope.Svg.select("#text_hour"+scope.TabId)
            .attr("x", scope.X(scope.TimeUnix))
            .text(scope.hora());

        /*
         * En este if se revisa si hay datos en la linea real
         * si la condicion es verdadera entonces se crea la linea con las clases y los estilos usando el .enter() de d3.js
         * de lo contrario solo se actualiza los datos del path para evitar perdida de recursos
         *
         * La variable "IniReal" es una bandera que se usa para evitar que entre varias veces a la primera condicion
         */
        var maxX = scope.X.domain()[1].getTime();
        var minX = scope.X.domain()[0].getTime();

        var cont_point=0;
        var ult_point=0;

        function filterArray(element, index, array) {
            //if(element.x>minX && element.x<maxX && element.y>minY && element.y<maxY)
            if((element.x>minX && element.x<maxX)){
                if(cont_point==0 && index>0){
                    scope.ImageArray.push(array[index-1]);
                }
                //scope.ImageArray.splice(index,1);
                scope.ImageArray.push(array[index]);
                //console.log("-------eliminate array----------");
                //console.log(index);
                cont_point=1;
            }
            if(element.x>maxX && ult_point==0 ){
                //console.log("Entro if derecha");
                scope.ImageArray.push(array[index]);
                ult_point=1;
            }
        }

        if(scope.Legend !=''){
            scope.Legend.remove();
        }

        ///////////////////////////////////////// Linea Teorica ////////////////////////////////////////////

        var teoricaRefresh = scope.Focus.selectAll(".lineaTeorica"+scope.TabId)
            .data(scope.PathInfoTeorica);
        teoricaRefresh
            .enter().append("svg:path");
        teoricaRefresh
            .attr("class", "lineaTeorica"+scope.TabId)
            .attr("id", function(d) { return "IdlineaTeorica_"+d.s; })
            .attr("stroke-dasharray", "10,10")
            .attr("clip-path", "url(#clip"+scope.TabId+")")
            //.attr("data-legend", function(d) { return d.s; })
            //.attr("d", function(d) { return scope.Linea(d.r); })
            .attr("d", function(d) {
                scope.ImageArray=[];
                cont_point=0;
                ult_point=0;
                d.r.forEach(filterArray);
                //console.log("-------d.r----------");
                //console.log(d.r.length);
                //console.log("-------image d.r----------");
                //console.log(scope.ImageArray);
                return scope.Linea(scope.ImageArray);
            })
            .style("stroke", function(d) { return d.c; })
            .style("fill", "none")
            .style("stroke-width", "4")
            .on("mouseover", function(d){
                d3.select(this).style("stroke-width", "4.5").attr('filter', 'url(#dropshadow)');
                return scope.DivToolTip.html( d.s ).style("display", "inline");
            })
            .on("mousemove", function(){return scope.DivToolTip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
            .on("mouseout", function(){d3.select(this).style("stroke-width", "4").attr('filter', null); return scope.DivToolTip.style("display", "none");});

        teoricaRefresh.exit().remove();

        ///////////////////////////////////////// Fin Linea Teorica ////////////////////////////////////////////


        scope.Legend = scope.Svg.append("g")

        scope.Legend
            .attr("class","legend"+scope.TabId)
            .attr("transform","translate(1130,60)")
            .style("font-size","12px")
            .call(d3.legend);

        scope.IColor=0;
        var colorLine = d3.scale.category20();
        //console.log("***********real**************");
        //console.log(scope.PathInfoReal);
        var realRefresh = scope.Focus.selectAll(".linea"+scope.TabId)
            .data(scope.PathInfoReal);
        realRefresh
            .enter().append("svg:path");
        realRefresh
            .attr("class", "linea"+scope.TabId)
            .attr("clip-path", "url(#clip"+scope.TabId+")")
            //.attr("d", function(d) { return scope.Linea(d.r); })
            .attr("d", function(d) {
                scope.ImageArray=[];
                cont_point=0;
                ult_point=0;
                d.r.forEach(filterArray);
                //console.log("-------d.r----------");
                //console.log(d.r.length);
                //console.log("-------image d.r----------");
                //console.log(scope.ImageArray);
                return scope.Linea(scope.ImageArray);
            })
            .style("fill", "none")
            .style("stroke", function(d,i) { if(d.c==null){return colorLine(i); }else{return d.c;} })
            .style("stroke-width", "4")
            .on("mouseover", function(d){
                d3.select(this).style("stroke-width", "4.5").attr('filter', 'url(#dropshadow)');
                return scope.DivToolTip.html( d.s ).style("display", "inline");
            })
            .on("mousemove", function(){return scope.DivToolTip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
            .on("mouseout", function(){d3.select(this).style("stroke-width", "4").attr('filter', null); return scope.DivToolTip.style("display", "none");});

        realRefresh.exit().remove();


        ///////////////////////////////////////// Linea Estimada ////////////////////////////////////////////
        var color_2 = d3.scale.category20();
        var BindPathEstimada = scope.Focus.selectAll(".lineaEstimada"+scope.TabId)
            .data(scope.PathInfoEstimada);

        BindPathEstimada
            .enter().append("svg:path");

        BindPathEstimada
            .attr("class", "lineaEstimada"+scope.TabId)
            .attr("stroke-dasharray", "5, 5, 1, 5")
            .attr("clip-path", "url(#clip"+scope.TabId+")")
            //.attr("d", function(d) { return scope.Linea(d.r); })
            .attr("d", function(d) {
                scope.ImageArray=[];
                cont_point=0;
                ult_point=0;
                d.r.forEach(filterArray);
                //console.log("-------d.r----------");
                //console.log(d.r.length);
                //console.log("-------image d.r----------");
                //console.log(scope.ImageArray);
                return scope.Linea(scope.ImageArray);
            })
            .style("stroke", function(d,i) { if(d.c==null){return color_2(i); }else{return d.c;} })
            //.style("stroke", "black")
            .style("stroke-width", "4")
            .style("fill", "none")
            .on("mouseover", function(d){

                d3.select(this).style("stroke-width", "4.5").attr('filter', 'url(#dropshadow)');
                scope.Focus.selectAll("#dot"+scope.TabId+d.s).style("display", "block");
                return scope.DivToolTip.html( d.s ).style("display", "inline");

            })
            .on("mousemove", function(){
                return scope.DivToolTip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
            })
            .on("mouseout", function(d){
                d3.select(this).style("stroke-width", "4").attr('filter', null);
                scope.Focus.selectAll("#dot"+scope.TabId+d.s).style("display", "none");
                return scope.DivToolTip.style("display", "none");
            });

        BindPathEstimada.exit().remove();

        ///////////////////////////////////////// Fin Linea Estimada ////////////////////////////////////////////

        ///////////////////////////////////////cod labels//////////////////////////////////////////////////

        var GroupRectangleData = scope.Svg.selectAll(".GroupRectangle"+scope.TabId)
            .data([]);

        GroupRectangleData.exit().remove();

        GroupRectangleData = scope.Svg.selectAll(".GroupRectangle"+scope.TabId)
            .data(scope.NumStation);

        GroupRectangleData
            .enter().append("svg:g");

        GroupRectangleData
            .attr("class", "GroupRectangle"+scope.TabId)
            .attr("transform", "translate( 0," + (scope.Margin.top-10)  + ")");
        //.attr("transform", function(d) { return "translate(0," + scope.Y(d) + ")"; });

        scope.GRectangleLabel = GroupRectangleData.append("g")
            .attr("class", "GroupRectangle"+scope.TabId)
            .attr("id", "GroupRectangleLabel"+scope.TabId)
            .attr("transform", function(d) { return "translate(0," + scope.Y(d) + ")"; });
        //.attr("transform", "translate( 0," + (scope.Margin.top-10)  + ")");

        scope.GRectangleLabel.append("rect")
            .attr("class", "GroupRectangle"+scope.TabId)
            .attr("width", 80)
            .attr("height", 13)
            .style("fill", "grey")
            .style("fill-opacity", 200);

        scope.GRectangleLabel.append("circle")
            .attr("class", "GroupRectangle"+scope.TabId)
            .attr("cx", 30)
            .attr("cy", 6)
            .attr("r", 5)
            .attr("fill", "white");

        scope.GRectangleLabel.append("text")
            .attr("class", "GroupRectangle"+scope.TabId)
            .attr("id", "SimbolLabel"+scope.TabId)
            .attr("y", 10)
            .attr("x", 27)
            .text(function(d){ if (scope.BoolClickText){return "+"}else{return "-"} })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "black")
            .style("noselect", true);

        //////////////////////////////////////////////////////////////////////////////////////////

        //console.log(scope.Estaciones);

        scope.LabelEstations
            .remove();

        // el codigo se repitio para que pudiera redibujar los labels de las estaciones.
        var prueba = scope.Svg.append("svg:g")
            .attr("class", "text_prueba"+scope.TabId)
            .attr("clip-path", "url(#clip_text"+scope.TabId+")")
            .attr("transform", "translate( 0," + scope.Margin.top + ")");

        scope.LabelEstations = prueba.selectAll("g")
            .data(scope.Estaciones);

        scope.GroupLabelSvg = scope.LabelEstations.enter().append("svg:g")
            .attr("transform", function(d) { return "translate(0," + scope.Y(d.km)  + ")"; });

        scope.TextLabelSvg = scope.GroupLabelSvg.append("svg:text")
            .attr('km', function(d) { return d.km; } )
            .attr('font-size', scope.Scale)
            .style("fill","black") //set the text color
            .attr("x", 40)
            .text(function(d) { return d.name; }) //enter the text string to display
            .on("dblclick", scope.onClickText);

        scope.GroupLabelSvg.append("line")
            .attr("class", "LineaHorizontal")
            .attr("x2", scope.Width)
            .attr("transform", "translate(80, 0)")
            .style("pointer-events","none");

        scope.LabelEstations
            .data(scope.Estaciones);

        scope.GroupLabelSvg
            .attr("transform", function(d) {  return "translate(0," + scope.Y(d.km) + ")"; });

        scope.TextLabelSvg
            .attr('km', function(d) { return d.km; } )
            .attr('font-size', scope.Scale)
            .text(function(d) { return d.name; });

        //////////////////////////////////////////////////////////////////////////////////////////////////

    };

    this.ProgrammaticPanZoom = function (minX, maxX, minY, maxY){
        /**
         /*Esta funcion establece un dominio personalisado para el eje X y el eje Y.
         /*Tambien establece el scale y el translate automaticamente evitando que la grafica se devuelva a un punto anterior.
         /*Recibe 4 parametros
         /*minX: punto inicial del eje x, este parametro recibe un valor de tiempo unix. El valor default es el valor minimo inicial del eje x
         /*maxX: punto final del eje x, este parametro recibe un valor de tiempo unix. El valor default es el valor maximo inicial del eje x
         /*minY: punto inicial del eje y, este parametro recibe un valor entero. El valor default es el valor minimo inicial del eje y
         /*maxY: punto final del eje y, este parametro recibe un valor entero. El valor default es el valor maximo inicial del eje y
         **/

        var scope = this; // defino esta variable para tener acceso a las funciones y propiedades de la clase.

        // Establesco los valores por default para las variables
        minX || ( minX = scope.StartTime );
        maxX || ( maxX = scope.EndTime );

        minY || ( minY = scope.MinEjeY );
        maxY || ( maxY = scope.MaxEjeY );

        d3.transition()
            .duration(0)
            .tween("zoomRangeSelector", function() {
                var ix = d3.interpolate(scope.X.domain(), [minX, maxX]),
                    iy = d3.interpolate(scope.Y.domain(), [minY, maxY]);
                return function(t) {
                    scope.ZoomB
                        .x(scope.X.domain(ix(t)))
                        .y(scope.Y.domain(iy(t)));

                    scope.refresh();
                };
            })
            .each("end", function(){scope.RealTime = true;}); // esta linea codigo lanza una funcion cuando la transicion llega a su fin
    };

    this.nowRealtime = function(){
        /**
         /*esta es la funcion que llamo para volver a situar la grafica en el tiempo actual
         **/
        var scope = this; // defino esta variable para tener acceso a las funciones y propiedades de la clase.
        var lastPosicion;
        var maxX;
        var minX;

        lastPosicion = scope.TimeUnix; //scope.PathInfo[0]['linea_real'][ scope.PathInfo[0]['linea_real'].length -1 ].x; // variable con el tiempo actual en formato unix
        //console.log(lastPosicion);
        // le sumo y le resto 15000 al tiempo actual para centrar la linea de la hora en la grafica
        minX = lastPosicion - 1800000;
        maxX = lastPosicion + 1800000;

        scope.ProgrammaticPanZoom(minX, maxX);
    };

    this.rangeSelector = function() {
        var scope = this; // defino esta variable para tener acceso a las funciones y propiedades de la clase.
        var FechaInicio = $("#FechaInicio").datetimepicker("getDate");
        var FechaFin = $("#FechaFin").datetimepicker("getDate");

        //console.log(FechaInicio);
        //console.log(FechaFin);

        if (FechaInicio == null || FechaFin == null ){
            Ext.Msg.alert('Aviso','Uno de los campos esta vacio u ocurrio un error intente de nuevo');
        }else{
            scope.ProgrammaticPanZoom(FechaInicio.getTime(), FechaFin.getTime());
        }

    };

    this.redraw = function() {
        /**
         /*esta es la funcion que me redibuja la grafica. la llamo en el setinterval q se ejecta cada segundo
         **/
        var scope = this; // defino esta variable para tener acceso a las funciones y propiedades de la clase.

        var maxX = scope.X.domain()[1].getTime();
        var minX = scope.X.domain()[0].getTime();

        var maxY = scope.Y.domain()[1];
        var minY = scope.Y.domain()[0];

        var lastPosicion = scope.TimeUnix;

        //if (lastPosicion > scope.EndTime - 29000) {  // miro si la ultima posicion de pathinfo es menor al maximo del rango definido en este caso 195
        minX += scope.UpdateTime;
        maxX += scope.UpdateTime;
        if (scope.RealTime === true && scope.RealTimeEvent === true) {

            scope.ProgrammaticPanZoom(minX, maxX, minY, maxY);

        };
        //};
        //console.log(scope.ZoomB.scale());
        scope.refresh();
    };

    this.stopRealTime = function(){
        this.RealTime = false;
    };

    this.readyRealTime = function(){
        this.RealTime = true;
    };

    this.display = function() {

        var scope = this; // defino esta variable para tener acceso a las funciones y propiedades de la clase.

        d3.json("resources/rutas.json", function(json) { // funcion para leer archivos json

            console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
            console.log("////////////////////////////////////////PathInfoTeorica////////////////////////////////////////////////////////////");
            console.log(scope.PathInfoTeorica);
            console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
            console.log("////////////////////////////////////////PathInfoEstimada////////////////////////////////////////////////////////////");
            console.log(scope.PathInfoEstimada);
            console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
            //scope.PathInfoTeorica = json["LA"]; // json linea teorica

            // Establesco los valores por default para la variable estaciones
            scope.Estaciones || ( scope.Estaciones = [{name : "Niquia", km : 0}, {name : "Bello", km : 100}, {name : "Madera", km : 200}, {name : "Acevedo", km : 300},{name : "Tricentenario", km : 400},{name : "Caribe", km : 500},{name : "Universidad", km : 600},{name : "Hospital", km : 700}, {name : "Prado", km : 800}, {name : "Parque Berrio", km : 900}, {name : "San Antonio", km : 1000},{name : "Alpujarra", km : 1100},{name : "Exposiciones", km : 1200},{name : "Industriales", km : 1300},{name : "Poblado", km : 1400}, {name : "Aguacatala", km : 1500}, {name : "Ayura", km : 1600}, {name : "Envigado", km : 1700},{name : "Itagui", km : 1800},{name : "Sabaneta", km : 1900},{name : "La Estrella", km : 2000}] );

            scope.Margin = {top: 50, right: 110, bottom: 100, left: 80},
                scope.Width = 1200 - scope.Margin.left - scope.Margin.right,
                scope.Height = 650 - scope.Margin.top - scope.Margin.bottom;

            scope.X = d3.time.scale()
                .domain([scope.StartTime, scope.EndTime])  // Compute the minimum and maximum date.
                .range([0, scope.Width]);

            scope.Y = d3.scale.linear()
                .domain([scope.MinEjeY, scope.MaxEjeY])       // especifica los valores que va a tener y
                .range([scope.Height, 0]);     // tamano del eje
            //.nice();

            /////////////////////////////////////// Custom Time Format ///////////////////////////////////

            var customTimeFormat = timeFormat([
                [d3.time.format("%Y"), function() { return true; }],
                [d3.time.format("%B"), function(d) { return d.getMonth(); }],
                [d3.time.format("%b %d"), function(d) { return d.getDate() != 1; }],
                [d3.time.format("%a %d"), function(d) { return d.getDay() && d.getDate() != 1; }],
                [d3.time.format("%H "), function(d) { return d.getHours(); }],
                [d3.time.format("%H:%M"), function(d) { return d.getMinutes(); }],
                [d3.time.format(":%S"), function(d) { return d.getSeconds(); }],
                [d3.time.format(".%L"), function(d) { return d.getMilliseconds(); }]
            ]);

            function timeFormat(formats) {
                return function(date) {
                    var i = formats.length - 1, f = formats[i];
                    while (!f[1](date)) f = formats[--i];
                    return f[0](date);
                };
            }

            scope.EjeX = d3.svg.axis()
                .scale(scope.X)
                //.ticks(10) // cantidad aproximada de divisiones en el eje
                //.tickSize(-scope.Height) // da el tamao de cada rayita q representa un tick. el primer numero es el que representa el tick normal, el segundo numero las subdiviciones y el ultimo el tick con el numero mayor. estan con -scope.Height para q las lineas llegan hasta la parte de arriba de la grafica
                .tickSubdivide(true) // define que cada tick se subdivida en la cantidad especificada
                .tickFormat(customTimeFormat);
            ///////////////////////////////////////// Fin Custom Time Format ///////////////////////////////////////////////

            scope.EjeY = d3.svg.axis()
                .scale(scope.Y)
                .ticks(0)
                //.tickValues([1, 2, 3, 5, 8, 13, 21])
                //.tickFormat(function(d) { return ["pruebs", "gato", "pruebs", "pruebs", "pruebs", "pruebs", "pruebs"]; })  http://stackoverflow.com/questions/16179021/d3-js-specify-text-for-x-axis
                .tickSubdivide(true);
            //.tickSize(-scope.Width);

            // Specify the function for generating path data
            scope.Linea = d3.svg.line()
                .x(function(d) {
                    return scope.X(d.x);
                })
                .y(function(d) {
                    return scope.Y(d.y);
                })
                .interpolate("linear");
            // "linear" for piecewise linear segments

            scope.ZoomB = d3.behavior.zoom()
                //.scaleExtent([1, 10])
                .x(scope.X)
                .y(scope.Y)
                .on("zoom", zoom_panning);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //selecciona el elemento donde va insertar la grafica
            scope.DivElem = d3.select(scope.RenderTo);

            scope.DivElem.append("svg:svg")
                .attr("id", scope.SvgID)
                .attr("width", scope.Width + scope.Margin.left  + scope.Margin.right)
                .attr("height", scope.Height + scope.Margin.top + scope.Margin.bottom);

            // Define 'div' for tooltips
            scope.DivLabel = d3.select("body").append("div")        // declare the properties for the div used for the tooltips
                .attr("class", "tooltip")                           // apply the 'tooltip' class
                .style("display", "none");                                  // set the opacity to nil

            scope.DivToolTip = d3.select("body")
                .append("div")
                .style("position", "absolute")
                .style("z-index", "10")
                .style("text-align", "center")
                //.style("width", "60px")
                .style("height", "20px")
                .style("padding", "2px")
                .style("font", "12px sans-serif")
                .style("border", "0px")
                .style("border-radius", "8px")
                .style("pointer-events", "none")
                .style("background", "#DEDCDA")
            //.text("a simple tooltip");


            scope.Svg = d3.select("#"+scope.SvgID);
            // Add the clip path. con esto se evita que la linea se salga de la grafica y demas q otras cosas q no se
            scope.Svg.append("svg:clipPath")
                .attr("id", "clip"+scope.TabId)
                .append("svg:rect")
                .attr("width", scope.Width)
                .attr("height", scope.Height);

            scope.Svg.append("svg:clipPath")
                .attr("id", "clip_text"+scope.TabId)
                .append("svg:rect")
                .attr("width", scope.Width + scope.Margin.left  + scope.Margin.right)
                .attr("height", scope.Height);


            scope.GroupText = scope.Svg.append("svg:g")
                .attr("id", "GroupText"+scope.TabId)
                .attr("transform", "translate("+ scope.Margin.left + "," + scope.Margin.top + ")")
                .attr("viewBox", "0 0 5 5");

            scope.Focus = scope.Svg.append("svg:g")
                .attr("id", "focus"+scope.TabId)
                .attr("transform", "translate("+ scope.Margin.left + "," + scope.Margin.top + ")")
                .call(scope.ZoomB)
                .append("g")
                .on("mousedown", mousedown)
                .on("mouseup", mouseup)
                .on("dblclick", dblClickUp)
                .on("mousewheel", dblClickUp);

            /*
             * Codigo q instancia la grafica pequena que controla el brush
             scope.Context = scope.Svg.append("svg:g")
             .attr("transform", "translate("+ scope.MarginBrush.left + "," + scope.MarginBrush.top + ")");
             */
            scope.Focus.append("rect")
                .attr("id", "focus_rect"+scope.TabId)
                .attr("width", scope.Width)
                .attr("height", scope.Height);

            // crea la clase del eje x
            scope.Focus.append("svg:g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + scope.Height + ")")
                //.style("stroke", "lightgrey")
                .call(scope.EjeX.orient("bottom"));

            scope.Focus.append("svg:g")
                .attr("class", "x axis")
                .attr("id", "ejeXtop"+scope.TabId)
                //.attr("transform", "translate(0," + scope.Height + ")")
                //.style("stroke", "lightgrey")
                .call(scope.EjeX.orient("top"));

            // crea la clase del eje y
            scope.Focus.append("svg:g")
                .attr("class", "y axis")
                //.attr("transform", "translate(" + scope.Width + ",0)")
                .call(scope.EjeY.orient('left'));

            scope.Focus.append("svg:g")
                .attr("class", "y axis")
                .attr("id", "ejeYRight"+scope.TabId)
                .attr("transform", "translate(" + scope.Width + ",0)")
                .call(scope.EjeY.orient('right'));

            ////////////////////////////////////////////////////Filtros SVG//////////////////////////////////////////////////

            /* For the shadow filter... */
            // everything that will be referenced
            // should be defined inside of a <defs> element ;)
            var defs = scope.Svg.append( 'defs' );

            // append filter element
            var filter = defs.append( 'filter' )
                .attr( 'id', 'dropshadow' ) /// !!! important - define id to reference it later

            // append gaussian blur to filter
            filter.append( 'feGaussianBlur' )
                .attr( 'in', 'SourceAlpha' )
                .attr( 'stdDeviation', 3 ) // !!! important parameter - blur
                .attr( 'result', 'blur' );

            // append offset filter to result of gaussion blur filter
            filter.append( 'feOffset' )
                .attr( 'in', 'blur' )
                .attr( 'dx', 2 ) // !!! important parameter - x-offset
                .attr( 'dy', 3 ) // !!! important parameter - y-offset
                .attr( 'result', 'offsetBlur' );

            // merge result with original image
            var feMerge = filter.append( 'feMerge' );

            // first layer result of blur and offset
            feMerge.append( 'feMergeNode' )
                .attr( 'in", "offsetBlur' )

            // original image on top
            feMerge.append( 'feMergeNode' )
                .attr( 'in', 'SourceGraphic' );
            // end filter stuff

            ////////////////////////////////////////////////////Fin Filtros SVG//////////////////////////////////////////////////


            //////////////////////////////////////////////////////////////////////////////////////////////////////
            //scope.LabelEstations = scope.GroupText.selectAll(".text_prueba"+scope.TabId)
            var prueba = scope.Svg.append("svg:g")
                .attr("class", "text_prueba"+scope.TabId)
                .attr("clip-path", "url(#clip_text"+scope.TabId+")")
                .attr("transform", "translate( 0," + scope.Margin.top + ")");

            scope.LabelEstations = prueba.selectAll("g")
                .data(scope.Estaciones);

            scope.GroupLabelSvg = scope.LabelEstations.enter().append("svg:g")
                .attr("transform", function(d) { return "translate(0," + scope.Y(d.km)  + ")"; });

            scope.TextLabelSvg = scope.GroupLabelSvg.append("svg:text")
                .attr('km', function(d) { return d.km; } )
                .attr('font-size', scope.Scale)
                .style("fill","black") //set the text color
                .attr("x", 40)
                .text(function(d) { return d.name; }) //enter the text string to display
                .on("dblclick", scope.onClickText);

            scope.GroupLabelSvg.append("line")
                .attr("class", "LineaHorizontal")
                .attr("x2", scope.Width)
                .attr("transform", "translate(80, 0)");

            ////////////////////////////////////////////////////////////////////////////////////////////////////////////


            var line_hour = scope.Focus.append("svg:g")
                .attr("class", "line_hour"+scope.TabId);

            scope.Focus.append("svg:clipPath")
                .attr("id", "clip_hour"+scope.TabId)
                .append("svg:rect")
                .attr("width", scope.Width)
                .attr("height", scope.Height)
                .attr("transform", "translate(0, -35)");

            line_hour.append("svg:line")
                .attr("id", "line_with_hour"+scope.TabId)
                .attr("clip-path", "url(#clip"+scope.TabId+")")
                .attr("x1", scope.X(scope.TimeUnix))
                .attr("y1", scope.Y(scope.MinEjeY))
                .attr("x2", scope.X(scope.TimeUnix))
                .attr("y2", scope.Y(scope.MaxEjeY))
                .style("stroke", "#CA0000");

            line_hour.append("svg:text") //append a text object
                .attr("id", "text_hour"+scope.TabId)
                .attr("clip-path", "url(#clip_hour"+scope.TabId+")")
                .attr("x",scope.X(scope.TimeUnix))
                .attr("y",scope.Y(scope.MaxEjeY)) //set y=10
                .attr('dx', '-2%')
                .attr('dy', '-4%')
                .style('font-size', '12')
                .style("noselect", true)
                .text(scope.hora()); //enter the text string to display

            scope.cssConfig(); // cargo los css al instanciar la clase


            ///////////////////////////////////////////////////////////////////////////codigo para redibujar/////////////////////////////////////////////


            var minX = 0;
            var maxY = 0;
            var minY = 0;

            scope.BoolClickText = true;

            scope.onClickText = function(){ //Zoom de los nodos
                //scope.RealTimeEvent = false; // desactivo el seteo del dominio en tiempo real mientras mantenga presionado click
                var kmLabel = d3.select(this).attr("km");  // de esta forma obtengo el id del elemento actual
                var color = d3.scale.category20();
                maxX = scope.X.domain()[1].getTime();
                minX = scope.X.domain()[0].getTime();
                console.log(kmLabel);
                if(scope.BoolClickText){
                    scope.ZoomB.y(scope.Y.domain([parseInt(kmLabel) - 0, parseInt(kmLabel) + 1.60]));
                    scope.X.domain([minX, maxX-950000]);
                    scope.ZoomB.x(scope.X.domain([minX, maxX-950000]));

                    d3.selectAll('.text_trans'+scope.TabId).style("fill", "#000080");
                    d3.selectAll('.linea_arrow'+scope.TabId).style("stroke", "#000000");
                    d3.selectAll('.arrow_path_red'+scope.TabId).style("stroke", "#FE0000").style("fill", "#FE0000");
                    d3.selectAll('.arrow_path_green'+scope.TabId).style("stroke", "#15A629").style("fill", "#15A629");
                    d3.selectAll('.arrow_path_yellow'+scope.TabId).style("stroke", "#F9A213").style("fill", "#F9A213");

                    scope.BoolClickText = false;
                }else{
                    scope.ZoomB.y(scope.Y.domain([scope.MinEjeY, scope.MaxEjeY]));
                    scope.X.domain([minX, maxX+950000]);
                    scope.ZoomB.x(scope.X.domain([minX, maxX+950000]));

                    d3.selectAll('.text_trans'+scope.TabId).style("fill", "none");
                    d3.selectAll('.linea_arrow'+scope.TabId).style("stroke", "none");

                    d3.selectAll('.arrow_path_red'+scope.TabId).style("stroke", "none").style("fill", "none");
                    d3.selectAll('.arrow_path_green'+scope.TabId).style("stroke", "none").style("fill", "none");
                    d3.selectAll('.arrow_path_yellow'+scope.TabId).style("stroke", "none").style("fill", "none");

                    scope.BoolClickText = true;
                }
                scope.refresh();

            };

            function mouseup(){
                scope.RealTimeEvent = true;
                //console.log("mause up");
                //scope.redraw();
            }

            function dblClickUp(){
                scope.RealTimeEvent = true;
                //guardo una copia de x,y en el momento antes de hacer un zoom con dobleclick
                scope.CopyX = scope.X.domain()[0].getTime();
                scope.CopyY = scope.Y.domain()[0];
                scope.VanDblClick=1;
                //console.log("x1 "+scope.CopyX+"|| y1 "+scope.VanDblClick);
                //scope.redraw();
            }

            function mousedown() {
                scope.RealTimeEvent = false; // desactivo el seteo del dominio en tiempo real mientras mantenga presionado click
                if (d3.event.shiftKey) {
                    var e = this,
                        origin = d3.mouse(e),
                        rect = scope.Svg.append("rect").attr("class", "zoom"+scope.TabId).style("stroke","steelblue").style("fill-opacity","0.5");

                    var translate = scope.ZoomB.translate(),
                        scale = scope.ZoomB.scale();

                    d3.select("body").classed("noselect", true);
                    origin[0] = Math.max(0, Math.min(scope.Width, origin[0]));
                    origin[1] = Math.max(0, Math.min(scope.Height, origin[1]));
                    d3.select("#"+scope.SvgID)
                        .on("mousemove", function() {
                            var m = d3.mouse(e);
                            m[0] = Math.max(0, Math.min(scope.Width, m[0]));
                            m[1] = Math.max(0, Math.min(scope.Height, m[1]));
                            rect.attr("x", Math.min(origin[0], m[0]))
                                .attr("y", Math.min(origin[1], m[1]))
                                .attr("width", Math.abs(m[0] - origin[0]))
                                .attr("height", Math.abs(m[1] - origin[1]))
                                .attr("transform", "translate("+ scope.Margin.left + "," + scope.Margin.top + ")");
                            //console.log(m[0]+" "+m[1]);

                            //console.log(domRectX[0]+" "+domRectX[1]);
                            //console.log(domRectY[0]+" "+domRectY[1]);
                        })
                        .on("mouseup", function() {
                            scope.RealTimeEvent = true;
                            //d3.select("body").classed("noselect", false);
                            var m = d3.mouse(e);
                            m[0] = Math.max(0, Math.min(scope.Width, m[0]));
                            m[1] = Math.max(0, Math.min(scope.Height, m[1]));
                            if (m[0] !== origin[0] && m[1] !== origin[1]) {
                                //Genero las vertices del rectangulo de tal manera que diera la forma como si siempre se hubiera generado de arriba para abajo
                                if(origin[0]>m[0]){
                                    var mCopy=m[0];
                                    m[0]= origin[0];
                                    origin[0]=mCopy;
                                }
                                if(origin[1]>m[1]){
                                    mCopy=m[1];
                                    m[1]= origin[1];
                                    origin[1]=mCopy;
                                }
                                //Genera los limites del rectangulo
                                var domRectX=[origin[0], m[0]].map(scope.X.invert);
                                var domRectY=[m[1],origin[1]].map(scope.Y.invert);
                                domRectX=domRectX.map(Date.parse)
                                //revisa si supero el limite en el eje Y
                                if((domRectY[1]-domRectY[0])<=scope.LimitZoomY){
                                    domRectY[1]=domRectY[0]+scope.LimitZoomY;
                                }
                                //revisa si supero el limite en el eje X
                                if((domRectX[1]-domRectX[0])<=scope.LimitZoomX){
                                    domRectX[1]=domRectX[0]+scope.LimitZoomX;
                                }
                                //console.log(domRectX[0]+" "+domRectX[1]);
                                //console.log(domRectX[1]-domRectX[0]);
                                //console.log(domRectY[0]+" "+domRectY[1]);

                                //anteriormente estas lineas tenias un sort, sin embargo no estaban haciendo bien el trabajo, ademas de que nuestro eje y se encuentra invertido, debido aesto se debe colocar primero m[1] y despues origin[1]
                                scope.ZoomB
                                    .x(scope.X.domain(domRectX))
                                    .y(scope.Y.domain(domRectY));


                                /*x.domain(x0.range().map(function(x) {
                                 return (x - translate[0]) / scale;
                                 }).map(x0.invert));

                                 y.domain(y0.range().map(function(y) {
                                 return (y - translate[0]) / scale;
                                 }).map(y0.invert));*/
                            }
                            rect.remove();
                            scope.refresh();
                            //despues del mauseup quito los eventos para q no se conserven despues de haber pintado el rectangulo
                            d3.select(this).on("mousemove", null);
                            d3.select(this).on("mouseup", null);
                        }, true);
                    d3.event.stopPropagation();
                }
            }

            function zoom_panning(){
                var t = d3.event.translate;
                var s = 10 * d3.event.scale;
                scope.Scale = 10;
                //console.log("S: "+scope.Scale);
                scope.refresh();
            }

            scope.refresh();
            setInterval(function () {
                //scope.TimeUnix = parseInt(scope.PathInfo[0]['linea_real'][ scope.PathInfo[0]['linea_real'].length -1 ].x);
                // console.log("////////////////////////////////////////PathInfoReal////////////////////////////////////////////////////////////");
                //console.log(scope.PathInfoReal);
                //console.log(scope.PathInfoReal.length);
                // console.log("////////////////////////////////////////////////////////////////////////////////////////////////////");
                //console.log(scope.TimeUnix);

                scope.redraw();

            }, scope.UpdateTime);

        });

    }

}

exd = new Date();

GraficaPrueba = new Grafica(
    "A",
    [150.541,148.551],
    exd.getTime(),
    exd.getTime() + 3600000,
    750,
    138,
    164,
    '#ChartLineaA',
    'svgLineA',
    [{name: "NIQ", km: 138.809}, {name: "BEO", km: 140.211}, {name: "MAD", km: 141.785}, {name: "ACE", km: 143.67}, {name: "TRI", km: 144.498}, {name: "CAR", km: 146.422}, {name: "UNI", km: 147.738}, {name: "HOS", km: 148.551}, {name: "PRA", km: 149.396}, {name: "BER", km: 150.147}, {name: "SAA", km: 150.541}, {name: "ALP", km: 151.057}, {name: "XPO", km: 151.583}, {name: "IND", km: 152.571}, {name: "POB", km: 154.57}, {name: "CAT", km: 156.638}, {name: "AYU", km: 157.66}, {name: "ENV", km: 159.422}, {name: "ITA", km: 161.212}, {name: "BAN", km: 162.408}, {name: "STA", km: 163.66}],
    10000
)




    
