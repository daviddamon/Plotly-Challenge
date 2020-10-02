// Plotly Challenge

// get data from json to build plots
function buildPlots(id) {

  // load json file into json object
  d3.json("samples.json").then((data) => {
    //console.log(data)

    // ***** Bar Chart *****
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

    // filter metadata by id
    var samples = data.samples.filter(s => s.id.toString() === id)[0];
    //console.log(samples)
    
    // get top 10 sample values
    var top10SampleValues = samples.sample_values.slice(0, 10).reverse();
    //console.log(top10SampleValues);
   
    // get top 10 otu ids
    var top10OtuIDs = samples.otu_ids.slice(0, 10).reverse();
    //console.log(top10OtuIDs);

    // change the top 10 otu id's to the required format
    var idOtu = top10OtuIDs.map(d => "OTU " + d);
    console.log(`OTU IDS: ${idOtu}`);

    // get the top 10 labels
    var top10Labels = samples.otu_labels.slice(0, 10);
    console.log(`Top 10 Sample Values: ${top10SampleValues}`);
    console.log(`Top 10 Id Values: ${top10OtuIDs}`);

    // create a trace for bar chart - from activity 1.02
    var trace1 = {
      type:"bar",
      orientation: "h",
      x: top10SampleValues,
      y: top10OtuID,
      text: top10Labels,
      marker: {
        color: "blue",
        width: 0.5
      }
    };

    // create the data array for the plot
    var data1 = [trace1];

    // define the plot layout
    var layout1 = {
      title: "Top 10 OTU",
      font:{
        family: "Arial"
      },
      xaxis:{ title: "Sample Count" },
      yaxis:{
        title: "OTU ID's",
        tickmode: "linear"
      },
      bargap: 0.1
      // margin: {
      //   t:
      //   l:
      //   r:
      //   b:
      // }
    };
      
    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("bar", data1, layout1);

  
    // ***** Bubble Chart *****
    // Use otu_ids for the x values.
    // Use sample_values for the y values.
    // Use sample_values for the marker size.
    // Use otu_ids for the marker colors.
    // Use otu_labels for the text values.

    // create trace2 for bubble chart
    var trace2 = {
      type: "bubble",
      mode: "markers",
      text: samples.otu_labels,
      x: samples.otu_ids,
      y: samples.sample_values,
      marker: {
        size: samples.sample_values,
        colors: samples.otu_ids,
        opacity: 0.8
      }
    };
      
    var data2 = [trace2];

    var layout2 = {
      title: "OTU ID vs. Count",
      showlegend: true,
      height: 500,
      width: 1000
    };

    Plotly.newPlot("bubble", data2, layout2);
      
  });
}


// ***** Metadata Table *****
// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object somewhere on the page.
// Update all of the plots any time that a new sample is selected.

function getData(id) {
  // read the json data 
  d3.json("samples.json").then((data) => {  
    
    var metaData = data.metadata;
    
    console.log(metaData);
  
    // filter meta data info by id
    var result = metadata.filter(meta => meta.id.toString() === id)[0];

    // select demographic panel to put data
    var panelInfo = d3.select("#sample-metadata");
    
    // empty the demographic info panel each time before getting new id info
    panelInfo.html("");

    // grab the necessary demographic data data for the id and append the info to the panel
    Object.entries(result).forEach((key) => {   
            panelInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
    });
  });
}

// create the function for the change event
function optionChanged(id) {
  buildPlots(id);
  getInfo(id);
}

// ***** Dropdown Menu ******

// create the function for the initial data rendering
function init() {

  // select dropdown menu 
  var dropdown = d3.select("#selDataset"); 

  // read the data 
  d3.json("samples.json").then((data) => {
      console.log(data)

      // get the id data to the dropdwown menu
      data.names.forEach((name) => {
          dropdown.append("option").text(name).property("value");
      });

      // call the functions to display the data and plots
      builsPlots(data.names[0]);
      getInfo(data.names[0]);
  });
}

init();
