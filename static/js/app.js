// Plotly Challenge

// get initial data
function getData() {

  // load json file into json object
  d3.json("samples.json").then(function(data) {
    console.log(data)

    var samples = data.samples.filter(s => s.id.toString() === id)[0];

    console.log(samples);

    // grab values from the json object to build the plots and table
    // var names = data.names;
    // var id = data.metadata.id;
    // var ethnicity = data.metadata.ethnicity;
    // var gender = data.metadata.gender;
    // var age = data.metadata.age;
    // var location = data.metadata.location;
    // var bbtype = data.metadata.bbtype;
    // var wfreq = data.metadata.wfreq;
    // var samples_id = data.samples.id;
    // var otu_ids = data.samples.otu_ids;
    // var sample_values = data.samples.sample_values;
    // var otu_labels = data.samples.otu_labels;
  

    // ***** Bar Chart *****
    // Use sample_values as the values for the bar chart.
    // Use otu_ids as the labels for the bar chart.
    // Use otu_labels as the hovertext for the chart.

    // get top 10 sample values for bar chart

    var top10SampleValues = samples.sample_values.slice(0, 10).reverse();
    
    console.log(top10SampleValues);
    
    // get top 10 otu ids for bar chart
    
    var top10OtuIDs = samples.otu_ids.slice(0, 10).reverse();
    
    console.log(top10OtuIDs);

    // change the top 10 otu id's to the required form
    var idOtu = top10OtuIDs.map(d => "OTU " + d);

    console.log(`OTU IDS: ${idOtu}`);

    // get the top 10 labels for bar chart
    var top10Labels = samples.otu_labels.slice(0, 10);

    console.log(`Sample Values: ${top10SampleValues}`);
    console.log(`Id Values: ${top10OtuIDs}`);

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
    },
  
    // create the data array for the plot
    var data = [trace1]

    // define the plot layout
    var layout = {
      title: "Top 10 OTU",
      font:{
        family: "Arial"
      },
      xaxis:{ title: "Sample Count" },
      yaxis:{ title: "OTU ID's" },
      bargap: 0.1
      // margin: {
      //   t:
      //   l:
      //   r:
      //   b:
      // }
    };
      
    // Plot the chart to a div tag with id "bar"
    Plotly.newPlot("#bar", data, layout);

  }
  });
}

// buildPlot();


//   // ***** Bubble Chart *****
//   // Use otu_ids for the x values.
//   // Use sample_values for the y values.
//   // Use sample_values for the marker size.
//   // Use otu_ids for the marker colors.
//   // Use otu_labels for the text values.

//   // trace2 for bubble chart
//   var trace2 = {
//     type: "bubble",
//     mode: "markers",
//     text: otu_labels,
//     x: otu_ids,
//     y: sample_values,
//     marker: {
//       size: sample_values,
//       colors: otu_ids,
//       opacity: 0.8
//     }
//   };
    
//   var data2 = [trace2];

//   var layout = {
//     title: "OTU ID vs. Count",
//     showlegend: true,
//     height: 500,
//     width: 1000
//   };

//   Plotly.newPlot("bubble", data2, layout);
  
// })
// };

// // ***** Metadata Table *****
// // Display the sample metadata, i.e., an individual's demographic information.
// // Display each key-value pair from the metadata JSON object somewhere on the page.
// // Update all of the plots any time that a new sample is selected.


// update each cells text with weather report values (date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.defineProperties(weatherReport).forEach(function([key, value]){
//     console.loglog(key, value);

//     var cell = tbody.append("td");
//     cell.text(value);
//   })
// })


// function getData() {
//   // read the data 
//   d3.json("/data/samples.json").then(function(data) {  
    
//     var metaData = data.metadata;
    
//     console.log(metaData);
  
// });


// // Use D3 to initialize the dropdown menu
// function init() { 
//   var dropdown = d3.select("#selDataset");
      
  
    // get the id data to the dropdwown menu
//     data.names.forEach(function(name) {
//       dropdown.append("option").text(name).property("value");
//     });

//     // call the functions to display the data and the plots to the page
//     getPlot(data.names[0]);
//     getInfo(data.names[0]);
//   };
// };

// //init();


// // ***** Dropdown Menu ******

// // Use D3 to create an event handler
// // d3.selectAll("body").on("change", updatePage);

// // function updatePage() {
// //   // Use D3 to select the dropdown menu
// //   var dropdownMenu = d3.selectAll("#selectOption").node();
// //   // Assign the dropdown menu item ID to a variable
// //   var dropdownMenuID = dropdownMenu.id;
// //   // Assign the dropdown menu option to a variable
// //   var selectedOption = dropdownMenu.value;

// //   console.log(dropdownMenuID);
// //   console.log(selectedOption);
// // }

// //***************************************


//  // ***** Gauge Chart *****
//   // Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
//   // You will need to modify the example gauge code to account for values ranging from 0 through 9.
//   // Update the chart whenever a new sample is selected.

//   // CODE GOES HERE

//  // }
