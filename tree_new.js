var i = 0;  // Initialize the counter at the top of your script

function update(source) {
    var i = 0;  // Initialize the counter

    // Assigns the x and y position for the nodes
    var treeData = treemap(root);

      // Now apply the exit transition to the exiting nodes
        var nodeExit = node.exit().transition()
        .duration(750)
        .attr("transform", function(d) { 
            return "translate(" + source.y + "," + source.x + ")"; 
        })
        .remove();

        nodeExit.select('circle')
        .attr('r', 1e-6);

        nodeExit.select('text')
        .style('fill-opacity', 1e-6);

        // Same for links
        var linkExit = link.exit().transition()
        .duration(750)
        .attr('d', function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal(o, o);
        })
        .remove();

        // Redefine the `diagonal` path for updated nodes
        function diagonal(s, d) {
        // Define the path from source s to destination d
        }
        
}


// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 1200 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// Append the svg object to the body of the page
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// Define the data for the tree
var treeData = {
    "name": "Designated",
    "children": [
        {
            "name": "BS EN 588-2:2001",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 124:1994"
                        },
                        {
                            "name": "EN 197-1:2000"
                        },
                        {
                            "name": "EN 476:1997"
                        },
                        {
                            "name": "EN 588-1:1996"
                        },
                        {
                            "name": "EN 681-1:1996"
                        },
                        {
                            "name": "ISO 390:1993"
                        },
                        {
                            "name": "prEN 1917:1995"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "EN ISO 9001"
                        },
                        {
                            "name": "ISO 9001:2000"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 40-5:2002",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 10025"
                        },
                        {
                            "name": "EN 10088"
                        },
                        {
                            "name": "EN 1011-1"
                        },
                        {
                            "name": "EN 1011-2"
                        },
                        {
                            "name": "EN 1011-3"
                        },
                        {
                            "name": "EN 10149-1"
                        },
                        {
                            "name": "EN 10149-2"
                        },
                        {
                            "name": "EN 10204"
                        },
                        {
                            "name": "EN 10210"
                        },
                        {
                            "name": "EN 10219"
                        },
                        {
                            "name": "EN 12767"
                        },
                        {
                            "name": "EN 288-1"
                        },
                        {
                            "name": "EN 288-2"
                        },
                        {
                            "name": "EN 288-3"
                        },
                        {
                            "name": "EN 288-8"
                        },
                        {
                            "name": "EN 40-1"
                        },
                        {
                            "name": "EN 40-3-1"
                        },
                        {
                            "name": "EN 40-3-2"
                        },
                        {
                            "name": "EN 50102"
                        },
                        {
                            "name": "EN 571-1"
                        },
                        {
                            "name": "EN 970"
                        },
                        {
                            "name": "EN ISO 1461"
                        },
                        {
                            "name": "ISO 1461:1999"
                        },
                        {
                            "name": "ISO 2063"
                        },
                        {
                            "name": "ISO 8501-1"
                        },
                        {
                            "name": "ISO 9717"
                        },
                        {
                            "name": "prEN 40-2:1999"
                        },
                        {
                            "name": "prEN 40-3-3"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "BS EN 40-5:2000"
                        },
                        {
                            "name": "EN 40-5:2000"
                        },
                        {
                            "name": "ISO 1463"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 12620:2002+A1:2008",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 1097-1"
                        },
                        {
                            "name": "EN 1097-2:1998"
                        },
                        {
                            "name": "EN 1097-3"
                        },
                        {
                            "name": "EN 1097-6"
                        },
                        {
                            "name": "EN 1097-8:1999"
                        },
                        {
                            "name": "EN 1097-9"
                        },
                        {
                            "name": "EN 1367-1:2007"
                        },
                        {
                            "name": "EN 1367-2"
                        },
                        {
                            "name": "EN 1367-4"
                        },
                        {
                            "name": "EN 1744-1:1998"
                        },
                        {
                            "name": "EN 1744-5"
                        },
                        {
                            "name": "EN 1744-6"
                        },
                        {
                            "name": "EN 196-2:2005"
                        },
                        {
                            "name": "EN 932-3"
                        },
                        {
                            "name": "EN 932-5"
                        },
                        {
                            "name": "EN 933-1"
                        },
                        {
                            "name": "EN 933-10"
                        },
                        {
                            "name": "EN 933-3"
                        },
                        {
                            "name": "EN 933-4"
                        },
                        {
                            "name": "EN 933-7"
                        },
                        {
                            "name": "EN 933-8"
                        },
                        {
                            "name": "EN 933-9"
                        },
                        {
                            "name": "ISO 565:1990"
                        },
                        {
                            "name": "prEN 933-11"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "CR 1901"
                        },
                        {
                            "name": "EN 13043"
                        },
                        {
                            "name": "EN 13055-1"
                        },
                        {
                            "name": "EN 13055-1:2002"
                        },
                        {
                            "name": "EN 13139"
                        },
                        {
                            "name": "EN 13383-1"
                        },
                        {
                            "name": "EN 206-1"
                        },
                        {
                            "name": "prEN 13055-2"
                        },
                        {
                            "name": "prEN 13242"
                        },
                        {
                            "name": "prEN 13450"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 1154:1997",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 1155"
                        },
                        {
                            "name": "EN 1634-1"
                        },
                        {
                            "name": "EN 1634-3"
                        },
                        {
                            "name": "EN 1670:1998"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "BS 6459-1"
                        },
                        {
                            "name": "DIN 18263-1"
                        },
                        {
                            "name": "DIN 18263-2"
                        },
                        {
                            "name": "DIN 18263-3"
                        },
                        {
                            "name": "EN 1154:1996"
                        },
                        {
                            "name": "EN 1154:1996+A1:2002"
                        },
                        {
                            "name": "EN 1158"
                        },
                        {
                            "name": "EN ISO/IEC 17025"
                        },
                        {
                            "name": "IEC 17025:1999"
                        },
                        {
                            "name": "NF P 26-316"
                        },
                        {
                            "name": "NF P 26-317"
                        },
                        {
                            "name": "SIS SS 2947"
                        },
                        {
                            "name": "SIS SS 2987"
                        },
                        {
                            "name": "prEN 1155"
                        },
                        {
                            "name": "prEN 1634"
                        },
                        {
                            "name": "prEN 1634-1"
                        },
                        {
                            "name": "prEN 1634-3"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 295-1:2013",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 1610:1997"
                        },
                        {
                            "name": "EN 295-2:2013"
                        },
                        {
                            "name": "EN 295-3:2012"
                        },
                        {
                            "name": "EN 681-1"
                        },
                        {
                            "name": "EN 681-4"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "BS EN 295-10:2005"
                        },
                        {
                            "name": "BS EN 295-1:1991"
                        },
                        {
                            "name": "BS EN 295-2:2013"
                        },
                        {
                            "name": "BS EN 295-4:2013"
                        },
                        {
                            "name": "BS EN 295-5:2013"
                        },
                        {
                            "name": "BS EN 295-6:2013"
                        },
                        {
                            "name": "BS EN 295-7:2013"
                        },
                        {
                            "name": "EN 12056-1"
                        },
                        {
                            "name": "EN 12056-2"
                        },
                        {
                            "name": "EN 12056-3"
                        },
                        {
                            "name": "EN 12889"
                        },
                        {
                            "name": "EN 1295-1"
                        },
                        {
                            "name": "EN 13501-1"
                        },
                        {
                            "name": "EN 295-10:2005"
                        },
                        {
                            "name": "EN 295-1:1991"
                        },
                        {
                            "name": "EN 295-4:2013"
                        },
                        {
                            "name": "EN 295-5:2013"
                        },
                        {
                            "name": "EN 295-6:2013"
                        },
                        {
                            "name": "EN 295-7:2013"
                        },
                        {
                            "name": "EN 752"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 13984:2013",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 12310-1"
                        },
                        {
                            "name": "EN 12311-2"
                        },
                        {
                            "name": "EN 12317-2"
                        },
                        {
                            "name": "EN 12691"
                        },
                        {
                            "name": "EN 1296"
                        },
                        {
                            "name": "EN 13416:2001"
                        },
                        {
                            "name": "EN 13501-1:2007+A1:2009"
                        },
                        {
                            "name": "EN 13859-1:2010"
                        },
                        {
                            "name": "EN 1847"
                        },
                        {
                            "name": "EN 1848-2"
                        },
                        {
                            "name": "EN 1849-2"
                        },
                        {
                            "name": "EN 1850-2"
                        },
                        {
                            "name": "EN 1928:2000"
                        },
                        {
                            "name": "EN 1931"
                        },
                        {
                            "name": "EN ISO 11925-2"
                        },
                        {
                            "name": "EN ISO 9001"
                        },
                        {
                            "name": "ISO 11925-2"
                        },
                        {
                            "name": "ISO 9001"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "BS EN 13984:2004+A1:2006"
                        },
                        {
                            "name": "EN 13146"
                        },
                        {
                            "name": "EN 13984:2004"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 771-3:2011+A1:2015",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 1052-2"
                        },
                        {
                            "name": "EN 1052-3"
                        },
                        {
                            "name": "EN 13501-1"
                        },
                        {
                            "name": "EN 1745"
                        },
                        {
                            "name": "EN 772-1"
                        },
                        {
                            "name": "EN 772-11"
                        },
                        {
                            "name": "EN 772-13"
                        },
                        {
                            "name": "EN 772-14"
                        },
                        {
                            "name": "EN 772-16:2011"
                        },
                        {
                            "name": "EN 772-1:2011"
                        },
                        {
                            "name": "EN 772-2"
                        },
                        {
                            "name": "EN 772-20"
                        },
                        {
                            "name": "EN 772-6"
                        },
                        {
                            "name": "EN ISO 12572"
                        },
                        {
                            "name": "ISO 12572:2001"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "BS 5628"
                        },
                        {
                            "name": "BS 6073"
                        },
                        {
                            "name": "BS 6073-1"
                        },
                        {
                            "name": "BS 6073-1:1981"
                        },
                        {
                            "name": "BS 8103-2"
                        },
                        {
                            "name": "EN 1996-1-1"
                        },
                        {
                            "name": "EN 771-3:2003"
                        },
                        {
                            "name": "EN 771-5"
                        },
                        {
                            "name": "EN 998-2"
                        },
                        {
                            "name": "EN 998-2:2010"
                        },
                        {
                            "name": "ISO 12491"
                        },
                        {
                            "name": "PD 6697"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 15382:2013",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "ASTM D 1434"
                        },
                        {
                            "name": "ASTM D 5890"
                        },
                        {
                            "name": "ASTM D 696"
                        },
                        {
                            "name": "CEN/ TS 14417"
                        },
                        {
                            "name": "CEN/TS 14416"
                        },
                        {
                            "name": "CEN/TS 14418"
                        },
                        {
                            "name": "EN 1109"
                        },
                        {
                            "name": "EN 12224"
                        },
                        {
                            "name": "EN 12225"
                        },
                        {
                            "name": "EN 12310-1"
                        },
                        {
                            "name": "EN 12311-1"
                        },
                        {
                            "name": "EN 12311-2"
                        },
                        {
                            "name": "EN 13361"
                        },
                        {
                            "name": "EN 13362"
                        },
                        {
                            "name": "EN 13491"
                        },
                        {
                            "name": "EN 13492"
                        },
                        {
                            "name": "EN 13493"
                        },
                        {
                            "name": "EN 14150"
                        },
                        {
                            "name": "EN 14196"
                        },
                        {
                            "name": "EN 14414:2004"
                        },
                        {
                            "name": "EN 14415"
                        },
                        {
                            "name": "EN 14575"
                        },
                        {
                            "name": "EN 14576"
                        },
                        {
                            "name": "EN 16416"
                        },
                        {
                            "name": "EN 1844"
                        },
                        {
                            "name": "EN 1849-1"
                        },
                        {
                            "name": "EN 1849-2"
                        },
                        {
                            "name": "EN 495-5"
                        },
                        {
                            "name": "EN ISO 10318:2005"
                        },
                        {
                            "name": "EN ISO 10319"
                        },
                        {
                            "name": "EN ISO 10320"
                        },
                        {
                            "name": "EN ISO 11357-6"
                        },
                        {
                            "name": "EN ISO 12236"
                        },
                        {
                            "name": "EN ISO 12957-1"
                        },
                        {
                            "name": "EN ISO 12957-2"
                        },
                        {
                            "name": "EN ISO 13438:2004"
                        },
                        {
                            "name": "EN ISO 527-1:2012"
                        },
                        {
                            "name": "EN ISO 527-3:1995"
                        },
                        {
                            "name": "EN ISO 527-4:1997"
                        },
                        {
                            "name": "EN ISO 9862"
                        },
                        {
                            "name": "EN ISO 9863-1"
                        },
                        {
                            "name": "EN ISO 9864"
                        },
                        {
                            "name": "ISO 10319"
                        },
                        {
                            "name": "ISO 10320"
                        },
                        {
                            "name": "ISO 11357-6"
                        },
                        {
                            "name": "ISO 12236"
                        },
                        {
                            "name": "ISO 12957-1"
                        },
                        {
                            "name": "ISO 12957-2"
                        },
                        {
                            "name": "ISO 13438:2004"
                        },
                        {
                            "name": "ISO 34-1:2010"
                        },
                        {
                            "name": "ISO 527-1:2012"
                        },
                        {
                            "name": "ISO 527-3:1995"
                        },
                        {
                            "name": "ISO 527-4:1997"
                        },
                        {
                            "name": "ISO 9862"
                        },
                        {
                            "name": "ISO 9863-1"
                        },
                        {
                            "name": "ISO 9864"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "ASTM D 1603"
                        },
                        {
                            "name": "ASTM D 4218"
                        },
                        {
                            "name": "ASTM D 5596"
                        },
                        {
                            "name": "ASTM D 5885"
                        },
                        {
                            "name": "ASTM D 6243"
                        },
                        {
                            "name": "ASTM D 6496"
                        },
                        {
                            "name": "BS EN 15382:2008"
                        },
                        {
                            "name": "CEN/TS 14417"
                        },
                        {
                            "name": "EN 1109-12"
                        },
                        {
                            "name": "EN 13249"
                        },
                        {
                            "name": "EN 13265"
                        },
                        {
                            "name": "EN 15382:2008"
                        },
                        {
                            "name": "EN 806-1:2000"
                        },
                        {
                            "name": "EN ISO 11358"
                        },
                        {
                            "name": "EN ISO 13426-1"
                        },
                        {
                            "name": "EN ISO 13426-2"
                        },
                        {
                            "name": "ISO 11358"
                        },
                        {
                            "name": "ISO 13426-1"
                        },
                        {
                            "name": "ISO 13426-2:2005"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 13986:2004+A1:2015",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "CEN /TR 12872"
                        },
                        {
                            "name": "CEN /TS 13354"
                        },
                        {
                            "name": "EN 1058"
                        },
                        {
                            "name": "EN 1087-1"
                        },
                        {
                            "name": "EN 1156"
                        },
                        {
                            "name": "EN 1195"
                        },
                        {
                            "name": "EN 120"
                        },
                        {
                            "name": "EN 12114"
                        },
                        {
                            "name": "EN 12369-1"
                        },
                        {
                            "name": "EN 12369-2"
                        },
                        {
                            "name": "EN 12524"
                        },
                        {
                            "name": "EN 12664"
                        },
                        {
                            "name": "EN 12775"
                        },
                        {
                            "name": "EN 12871"
                        },
                        {
                            "name": "EN 13353"
                        },
                        {
                            "name": "EN 13501-1"
                        },
                        {
                            "name": "EN 14279"
                        },
                        {
                            "name": "EN 14755"
                        },
                        {
                            "name": "EN 15197"
                        },
                        {
                            "name": "EN 1995-1-1"
                        },
                        {
                            "name": "EN 300"
                        },
                        {
                            "name": "EN 309"
                        },
                        {
                            "name": "EN 310"
                        },
                        {
                            "name": "EN 312"
                        },
                        {
                            "name": "EN 313-2"
                        },
                        {
                            "name": "EN 314-1"
                        },
                        {
                            "name": "EN 314-2"
                        },
                        {
                            "name": "EN 316"
                        },
                        {
                            "name": "EN 317"
                        },
                        {
                            "name": "EN 319"
                        },
                        {
                            "name": "EN 321"
                        },
                        {
                            "name": "EN 323"
                        },
                        {
                            "name": "EN 325"
                        },
                        {
                            "name": "EN 326-1"
                        },
                        {
                            "name": "EN 326-2"
                        },
                        {
                            "name": "EN 335-1"
                        },
                        {
                            "name": "EN 335-2"
                        },
                        {
                            "name": "EN 335-3"
                        },
                        {
                            "name": "EN 383"
                        },
                        {
                            "name": "EN 594"
                        },
                        {
                            "name": "EN 596"
                        },
                        {
                            "name": "EN 622-1"
                        },
                        {
                            "name": "EN 622-2"
                        },
                        {
                            "name": "EN 622-3"
                        },
                        {
                            "name": "EN 622-4"
                        },
                        {
                            "name": "EN 622-5"
                        },
                        {
                            "name": "EN 633"
                        },
                        {
                            "name": "EN 634-2"
                        },
                        {
                            "name": "EN 636"
                        },
                        {
                            "name": "EN 717-1"
                        },
                        {
                            "name": "EN 717-2"
                        },
                        {
                            "name": "EN 789"
                        },
                        {
                            "name": "EN ISO 12572:2001"
                        },
                        {
                            "name": "EN ISO 354"
                        },
                        {
                            "name": "ISO 12572:2001"
                        },
                        {
                            "name": "ISO 354:2003"
                        },
                        {
                            "name": "PrEN 14374"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "CEN /TR 14823"
                        },
                        {
                            "name": "CEN /TS 13354:1998"
                        },
                        {
                            "name": "EN 13501-1:2002"
                        },
                        {
                            "name": "EN 351-1"
                        },
                        {
                            "name": "EN 351-2"
                        },
                        {
                            "name": "EN 634-1"
                        },
                        {
                            "name": "EN 636-1"
                        },
                        {
                            "name": "EN 636-2"
                        },
                        {
                            "name": "EN 636-3"
                        },
                        {
                            "name": "EN 636:2003"
                        },
                        {
                            "name": "EN ISO 140-3"
                        },
                        {
                            "name": "EN ISO 717-1"
                        },
                        {
                            "name": "EN ISO 9001"
                        },
                        {
                            "name": "ENV 1099"
                        },
                        {
                            "name": "ISO 9001:2000"
                        }
                    ]
                }
            ]
        },
        {
            "name": "BS EN 1279-5:2018",
            "children": [
                {
                    "name": "normative",
                    "children": [
                        {
                            "name": "EN 1063"
                        },
                        {
                            "name": "EN 12600"
                        },
                        {
                            "name": "EN 12758"
                        },
                        {
                            "name": "EN 1279-1:2018"
                        },
                        {
                            "name": "EN 1279-2:2018"
                        },
                        {
                            "name": "EN 1279-3:2018"
                        },
                        {
                            "name": "EN 1279-4:2018"
                        },
                        {
                            "name": "EN 1279-6:2018"
                        },
                        {
                            "name": "EN 12898"
                        },
                        {
                            "name": "EN 13022-1:2014"
                        },
                        {
                            "name": "EN 13501-1"
                        },
                        {
                            "name": "EN 13501-2"
                        },
                        {
                            "name": "EN 13501-5"
                        },
                        {
                            "name": "EN 13541"
                        },
                        {
                            "name": "EN 14449"
                        },
                        {
                            "name": "EN 15434:2006+A1:2010"
                        },
                        {
                            "name": "EN 15998"
                        },
                        {
                            "name": "EN 16612"
                        },
                        {
                            "name": "EN 356"
                        },
                        {
                            "name": "EN 410"
                        },
                        {
                            "name": "EN 673"
                        },
                        {
                            "name": "EN 674"
                        },
                        {
                            "name": "EN 675"
                        },
                        {
                            "name": "EN ISO 52022-3"
                        },
                        {
                            "name": "ISO 52022-3"
                        },
                        {
                            "name": "ISO 9385"
                        }
                    ]
                },
                {
                    "name": "informative",
                    "children": [
                        {
                            "name": "BS EN 1279-5:2005+A2:2010"
                        },
                        {
                            "name": "EN 12150-1"
                        },
                        {
                            "name": "EN 12488"
                        },
                        {
                            "name": "EN 12488:2016"
                        },
                        {
                            "name": "EN 1279-5:2005+A2:2010"
                        },
                        {
                            "name": "EN 13022-2"
                        },
                        {
                            "name": "EN 1748-1-1"
                        },
                        {
                            "name": "EN 572-1"
                        },
                        {
                            "name": "EN ISO 1716"
                        },
                        {
                            "name": "EN ISO 9001"
                        },
                        {
                            "name": "ISO 1716"
                        },
                        {
                            "name": "ISO 9001"
                        },
                        {
                            "name": "prEN 14449:2017"
                        },
                        {
                            "name": "prEN 16612:2017"
                        }
                    ]
                }
            ]
        }
    ]
};

// Create a tree layout and specify the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
var root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse the node and all its children
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
        d._children.forEach(collapse);
    }
}

// Collapse after the second level
root.children.forEach(collapse);
update(root);

// Update function to manage the tree layout
function update(source) {
    // Assigns the x and y position for the nodes
    var treeData = treemap(root);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

    // Normalize for fixed-depth
    nodes.forEach(function (d) {
        d.y = d.depth * 180;
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll('g.node')
        .data(nodes, function(d) {return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
          return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

    // Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", function(d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function(d) { return d.data.name; });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(750)
      .attr("transform", function(d) { 
          return "translate(" + d.y + "," + d.x + ")";
       });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      })
      .attr('cursor', 'pointer');

      var nodeExit = node.exit().transition()
      .duration(750)
      .attr("transform", function (d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
      .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
      .style('fill-opacity', 1e-6);


    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll('path.link')
        .data(links, function(d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function(d){
          var o = {x: source.x0, y: source.y0}
          return diagonal(o, o)
        });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(750)
        .attr('d', function(d){ return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(750)
        .attr('d', function(d) {
          var o = {x: source.x, y: source.y}
          return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d){
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {

      path = `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`

      return path
    }

    function click(event, d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }


}