
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography, 
  Drawer, 
  Box,
  Card,
  CardContent,
  CssBaseline,  
  Grid2,  
  Avatar,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Highcharts from "highcharts/highcharts.js";
import HighchartsReact from "highcharts-react-official";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import DescriptionIcon from '@mui/icons-material/Description';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Tooltip } from '@mui/material';

import './index.css';



function DellPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Pie chart for backlog
  const pieOptions = {
    chart: {
      type: 'pie',
      height: 316,
      width:350,
      marginBottom:40
    },
    title: {
      text: ''
    },
    colors: ['#006ca5', '#00b4d8', '#90e0ef'],
    credits: {
      enabled: false
    },
    series: [{
      name: 'Breakdown',
      data: [
        { name: 'ATB', y: 234, color: '#006ca5' },
        { name: 'STBL', y: 120, color: '#00b4d8' },
        { name: 'Holds', y: 40, color: '#90e0ef' },
        
      ],
      dataLabels: {
        format: '{point.y}',
        style: {
          color: 'white',
          fontWeight: 'bold',
          textOutline: 'none'
        }
      }
    }],
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: -30
        },
        showInLegend: true
      }
    },
    legend: {
      align:"center",
      verticalAlign: 'bottom',
      layout: 'horizontal',
      itemStyle: {
        fontSize: '10px',
        
      },
      width:250,
      x:30
      
      
      
      

    }
  };

  const gaugeOptions = {
    chart: {
      type: 'solidgauge',
      height: 220
    },
    title: {
      text: '',
    },
    pane: {
      center: ['50%', '75%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: '#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    yAxis: {
      min: 0,
      max: 100,
      stops: [
        [0.3, '#00A0DC'], 
        [0.6, '#00A0DC'], 
        [0.9, '#00A0DC']  
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 0
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: -25,
          borderWidth: 0,
          useHTML: true
        }
      }
    },
    series: [{
      name: 'Capacity',
      data: [24],
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:24px;font-weight:bold">{y}%</span></div>'
      },
      rounded: false
    }]
  };

 
  const ltgGaugeOptions = {
    ...gaugeOptions
  };


  const barOptions = {
    chart: {
      type: 'column',
      height: 260
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['W9 Thu', 'W9 Fri', 'W10 Sat', 'W10 Sun', 'W10 Mon', 'W10 Tue', 'W10 Wed']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      gridLineWidth: 0, 
      labels: {
        enabled: false 
      }
    },
    credits: {
      enabled: false
    },
    legend: {
      align: 'center', 
      verticalAlign: 'bottom',
      layout: 'horizontal',
      floating: false,
      backgroundColor: 'white',
      borderColor: '#CCC',
      borderWidth: 0,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderRadius: 7,
        pointWidth: 19,
        cursor:'pointer' 
      }
    },
    series: [{
      name: 'Shippable',
      data: [200, 700, 250, 300, 400, 700, 900],
      color: '#006ca5', 
      dataLabels: {
        enabled: true, 
        inside: false, 
        verticalAlign: 'bottom', 
        y: -10, 
        style: {
          color:'black'
        }
      }
    }, {
      name: 'Unshippable',
      data: [80, 500, 100, 100, 100, 150, 200],
      color: '#00b4d8', 
      dataLabels: {
        enabled: false 
      }
    }]
  };
  
  
  
  
  
  
  

    const customPieOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      height:100,
      width:180
      
      
    },
    title: {
      text: '24%',
      align: 'center',
      verticalAlign: 'middle',
      y: 20,
      style: {
        fontSize: '1.5em'
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          },
          formatter: function() {
            return null; 
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '230%',
        borderWidth:6,
        borderColor:null,
        cursor:'pointer'
        
        

      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '100%',
      data: [
        { y: 70.0, color: '#006ca5' }, 
        { y: 20.0, color: '#00b4d8' }, 
        { y: 10.0, color: '#90e0ef' },  
      ]
    }]
  };

  const [activeTab, setActiveTab] = useState('client');
  const [active, setActive] = useState('summary');
  

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  

  const handleToggle = (option) => {
    setActive(option);
  };

  

  const data = [
    { category: 'Total', shippable: 423.5, unshippable: 423.5, dod: '-44.7 (10.1%)' },
    { category: 'ATB', shippable: 256.0, unshippable: 256.0, dod: '+1.8 (9.5%)' },
    { category: 'WIP', shippable: 191.4, unshippable: 191.4, dod: '+4.8 (8.1%)' },
    { category: '_FG', shippable: 33.8, unshippable: 33.8, dod: '-1.6 (8.0%)' },
    { category: 'F-Pickup', shippable: 33.8, unshippable: 33.8, dod: '-1.6 (8.0%)' },
  ];

  console.log("vw", Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', bgcolor: '#f5f5f5' }}>
      <CssBaseline />

      {/* Top AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'white', color: '#0076CE', boxShadow: 1 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
  <path fill="#0288d1" d="M24,4C12.956,4,4,12.956,4,24s8.956,20,20,20s20-8.956,20-20S35.044,4,24,4z M24,41c-9.391,0-17-7.609-17-17S14.609,7,24,7s17,7.609,17,17S33.391,41,24,41z"></path><path fill="#0288d1" d="M35.641,25.563l2.84,0.004l-0.004,2.395l-5.691-0.012l0.012-8.172l2.855,0.004L35.641,25.563z M26.34,25.102l-4.699,3.684l-4.285-3.379c-0.621,1.484-2.109,2.52-3.836,2.516l-3.664-0.004l0.008-8.172l3.668,0.004c1.926,0.004,3.309,1.223,3.828,2.531l4.297-3.367l1.586,1.25l-3.934,3.086l0.754,0.594l3.934-3.086l1.59,1.254l-3.934,3.082l0.75,0.594l3.941-3.082l0.004-2.836l2.852,0.004l-0.008,5.781l2.84,0.004l-0.004,2.391l-5.691-0.008L26.34,25.102z M15.012,23.84c0-1.113-0.73-1.742-1.77-1.742h-0.637l-0.004,3.477h0.621C14.184,25.574,15.012,25.051,15.012,23.84"></path>
  </svg>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start', ml:15 }}>
            <Typography variant="body1" component="div" color="primary" sx={{ mx: 2, fontWeight: 'bold', cursor: 'pointer' }}>
              Performance
            </Typography>
            <Typography variant="body1" component="div" color="primary" sx={{ mx: 2, fontWeight: 'bold', cursor: 'pointer' }}>
              Sales Ships & Backlog
            </Typography>
            <Typography variant="body1" component="div" color="primary" sx={{ mx: 2, fontWeight: 'bold', cursor: 'pointer' }}>
              Customer Experience
            </Typography>
            <Typography variant="body1" component="div" color="primary" sx={{ mx: 2, fontWeight: 'bold', cursor: 'pointer' }}>
              WorkDesk
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', border: '1px solid #0000008A', borderRadius: 20, p: 0.5, alignItems: 'center', mr: 2, width: 170, justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ mx: 1,ml:2,color:'#0000008A'  }}>Ask ISCAN</Typography>
              <SearchIcon fontSize="small" sx={{color:'#0000008A'}} />
            </Box>
            <NotificationsIcon color="action" sx={{ mx: 1, cursor: 'pointer' }} />
            <EmailIcon color="action" sx={{ mx: 1, cursor: 'pointer' }} />
            <AccountCircleIcon color="action" sx={{ mx: 1, cursor: 'pointer' }} />
          </Box>
        </Toolbar>
      </AppBar>

      

      

      {/* Side Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: '13.9vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 210,
            boxSizing: 'border-box',
            top: 64,
            height: 'calc(100% - 64px)'
          }
        }}
      >
        <Box sx={{display:'flex',flexDirection:'row', mt:2}}>       
          <Box sx={{ display: 'flex', alignItems: 'center', mt:0.8, cursor: 'pointer' }}>
            <ArrowLeftIcon sx={{color:"#0076CE", fontSize:30}}/>
          </Box>
          <Box sx={{ borderRadius:10, height:30,display:'flex', flexDirection:'row', boxShadow: 3,mt:1}}>
            <Box
              sx={{
                borderRadius: 5,
                backgroundColor: activeTab === 'client' ? '#0076CE' : 'white',
                height: 30,
                pl: 1.7,
                pr: 1.7,
                pt: 0.5,
                pb: 0.5,
                cursor: 'pointer',
                color: activeTab === 'client' ? 'white' : '#0076CE',
              }}
              onClick={() => handleClick('client')}
            >
              <Typography>
                Client
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: 5,
                backgroundColor: activeTab === 'server' ? '#0076CE' : 'white',
                height: 30,
                pl: 1.7,
                pr: 1.7,
                pt: 0.5,
                pb: 0.5,
                cursor: 'pointer',
                color: activeTab === 'server' ? 'white' : '#0076CE',
              }}
              onClick={() => handleClick('server')}
            >
              <Typography>
                Server
              </Typography>
            </Box>
          </Box>         
          
        </Box>

        <Box>
          <Box
            onClick={() => handleToggle('summary')}
            sx={{
              backgroundColor: active === 'summary' ? "#0076CE" : 'transparent',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              width: 190,
              height: 30,
              ml: 1,
              pl: 0.8,
              display: 'flex',
              alignItems: 'center',
              mt: 3,
              cursor: 'pointer'
            }}>
            <DescriptionIcon sx={{ color: active === 'summary' ? 'white' : '#0076CE', mr: 2 }} />
            <Typography sx={{ color: active === 'summary' ? "white" : "#0076CE" }}>
              Summary
            </Typography>
          </Box>
          <Box
            onClick={() => handleToggle('simulation')}
            sx={{
              backgroundColor: active === 'simulation' ? "#0076CE" : 'transparent',
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              width: 190,
              height: 30,
              ml: 1,
              pl:0.8,              
              mt: 2.5,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}>
            <QueryStatsIcon sx={{ color: active === 'simulation' ? 'white' : '#0076CE', mr: 2  }} />
            <Typography sx={{ color: active === 'simulation' ? "white" : "#0076CE" }}>
              Simulation
            </Typography>
          </Box>
        </Box>
        
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          marginLeft: '206px',
          marginTop: '30px'
        }}
      >
        {/* Breadcrumb */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" sx={{ }}>Home</Typography>
          <Typography variant="body2" sx={{ mx: 1,fontSize:25 }}>›</Typography>
          <Typography variant="body2" sx={{ }}>Facilities Dashboard</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" sx={{ color: 'grey.600',mr:1 }}>Wed, Jan 8</Typography>
        </Box>

        {/* Global ODMs Section */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{mt:3}}>
            <Typography sx={{ color: '#0076CE', fontWeight: 'bold', fontSize:12 }}>
              Global ODMs
            </Typography>
            <Box sx={{ height: 3, backgroundColor: '#0076CE', width: 50, ml:1.5,mb:3 }} />
          </Box>
          
          <Box sx={{display: 'flex', flexDirection:"row"}}>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Box sx={{ border: '1px solid #0076CE', borderRadius: 15, px: 1.5, py: 0.3, backgroundColor: '#fff', color:"#0076CE",cursor: 'pointer' }}>
                <Typography variant="body2" >Client</Typography>
              </Box>
              <Box sx={{ border: '1px solid #0076CE', borderRadius: 15, px: 1.5, py: 0.3, backgroundColor: '#fff', color:"#0076CE",cursor: 'pointer' }}>
                <Typography variant="body2">FY25Q4W10</Typography>
              </Box>
              <Box sx={{ border: '1px solid #0076CE', borderRadius: 15, px: 1.5, py: 0.3, backgroundColor: '#fff', color:"#0076CE",cursor: 'pointer' }}>
                <Typography variant="body2">Overall</Typography>
              </Box>
              <Box sx={{ border: '1px solid #0076CE', borderRadius: 15, px: 1.5, py: 0.3, backgroundColor: '#fff', color:"#0076CE",cursor: 'pointer' }}>
                <Typography variant="body2">Global</Typography>
              </Box>
            </Box>
            <Box sx={{marginLeft: 'auto',mr:0.8,display:'flex',flexDirection:'row'}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',mr:1,cursor: 'pointer' }}>              
                <Typography sx={{ fontSize: 15, color: "#0076CE", mb: 0.5 }}>D</Typography>
                <Box sx={{ height: 3, backgroundColor: '#0076CE', width: 22 }} />                
              </Box>
              <Typography sx={{fontSize:15,color:"#0076CE",mr:1,cursor: 'pointer'}}>W</Typography>
              <CalendarViewMonthIcon sx={{height:20, color:"#0076CE",cursor: 'pointer'}}/>
            </Box>
          </Box>
        </Box>

        {/* Top Metrics Cards */}
        <Grid2 container spacing={2} sx={{ mb: 2 }}>
          {/* BACKLOG */}
          <Grid2 item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 1, width:'19.9vw' }}>
              <CardContent>
                <Typography sx={{mb: 1 }}>BACKLOG</Typography>
                <Box sx={{display:'flex',flexDirection:"horizontal"}}>                
                  <Box sx={{ display: 'flex', flexDirection:"column", alignItems: 'baseline', mr:'15px' }}>
                    <Typography variant="h4" sx={{  }}>916.1</Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                      <Typography variant="body2" >-12.1 (1%)</Typography>
                      <ArrowDownwardIcon fontSize="small" sx={{ml:0.2, fontSize: '1rem', color: '#21ab21'}}/>
                      <Typography variant="body2" color="textSecondary">DoD</Typography>
                    </Box>
                  </Box>
                  <Divider orientation="vertical" flexItem sx={{height:'40px'}} />
                  <Box sx={{ml:'15px'}} >
                    <Typography variant="body2">
                      <Box component="span" sx={{ fontWeight: 'bold' }}>16.6</Box> Shippable
                    </Typography>
                    <Typography variant="body2">
                      <Box component="span" sx={{ fontWeight: 'bold' }}>-9.0</Box> Unshippable
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid2>

          {/* DOWNLOADS */}
          <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, width:'19.9vw' }}>
                <CardContent>
                  <Typography  sx={{ mb: 1 }}>DOWNLOADS</Typography>
                  <Box sx={{display:'flex',flexDirection:"horizontal"}}>                
                    <Box sx={{ display: 'flex', flexDirection:"column", alignItems: 'baseline', mr:'15px' }}>
                      <Typography variant="h4" sx={{  }}>916.1</Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body2" >-15.6 (3%)</Typography>
                        <ArrowDownwardIcon fontSize="small" sx={{ml:0.2, fontSize: '1rem', color: '#21ab21'}}/>
                        <Typography variant="body2" color="textSecondary">DoD</Typography>
                      </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{height:'40px'}} />
                    <Box sx={{ml:'15px'}} >
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>16.6</Box> Shippable
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>-9.0</Box> Unshippable
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
          </Grid2>

          {/* BUILD */}
          <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, width:'19.9vw' }}>
                <CardContent>
                  <Typography  sx={{ mb: 1 }}>BUILD</Typography>
                  <Box sx={{display:'flex',flexDirection:"horizontal"}}>                
                    <Box sx={{ display: 'flex', flexDirection:"column", alignItems: 'baseline', mr:'15px' }}>
                      <Typography variant="h4" sx={{  }}>916.1</Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body2" >-19.1 (4%)</Typography>
                        <ArrowDownwardIcon fontSize="small" sx={{ml:0.2, fontSize: '1rem', color: '#21ab21'}}/>
                        <Typography variant="body2" color="textSecondary">DoD</Typography>
                      </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{height:'40px'}} />
                    <Box sx={{ml:'15px'}} >
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>16.6</Box> Shippable
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>-9.0</Box> Unshippable
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
          </Grid2>

          {/* SHUTTLES */}
          <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, width:'19.9vw' }}>
                <CardContent>
                  <Typography sx={{ mb: 1 }}>SHUTTLES</Typography>
                  <Box sx={{display:'flex',flexDirection:"horizontal"}}>                
                    <Box sx={{ display: 'flex', flexDirection:"column", alignItems: 'baseline', mr:'15px' }}>
                      <Typography variant="h4" sx={{  }}>916.1</Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body2" >-14.1 (4%)</Typography>
                        <ArrowDownwardIcon fontSize="small" sx={{ml:0.2, fontSize: '1rem', color: '#21ab21'}}/>
                        <Typography variant="body2" color="textSecondary">DoD</Typography>
                      </Box>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{height:'40px'}} />
                    <Box sx={{ml:'15px'}} >
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>16.6</Box> Shippable
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>-9.0</Box> Unshippable
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
          </Grid2>
        </Grid2>

        {/* Charts Row */}
        <Grid2 container spacing={2} sx={{ mb: 2 }}>
          <Grid2 item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 1, mr:0.5, width:'26.5vw' }}>
              <CardContent>
                <Typography  sx={{ }}>BACKLOG</Typography>                
                <HighchartsReact highcharts={Highcharts} options={pieOptions} />
              </CardContent>
            </Card>
          </Grid2>
          <Box sx={{display:'flex',flexDirection:'column'}}>
            <Grid2>
              <Card sx={{ borderRadius: 3, boxShadow: 1, mb: 2, width: '55vw' }}>
                <Box sx={{display:'flex',flexDirection:'row',paddingLeft:2,paddingRight:2}}>
                  {/* shippable */}
                  <Box sx={{width:'350px',mr:6}}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', borderBottom: 1, borderColor: 'divider', mb: 1 }}>
                      <Typography sx={{mb:0.5,mt:1}}>
                        SHIPPABLE
                      </Typography>
                    </Box> 
                    <Typography sx={{ fontSize: '0.75rem',mb:1 }}>
                      DoD
                    </Typography>  
                    <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'flex-end', mb: 1 }}>
                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start',mr:5.2 }}>
                        <Box sx={{display:'flex', flexDirection:'row'}}>
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>                          
                          <Typography sx={{ fontSize: '1rem', ml:1 }} >
                            -44.7(55.1%)
                          </Typography>                         

                        </Box>
                        <Box sx={{display:'flex', flexDirection:'row', mt:0.4}}>
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>
                          <Typography sx={{ fontSize: '1rem', ml:1 }} >
                            -54.7(10.1%)
                          </Typography>                         

                        </Box>
                        <Box sx={{display:'flex', flexDirection:'row', mt:0.4}}>
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>
                          <Typography sx={{ fontSize: '1rem', ml:1 }} >
                            -94.7(18.1%)
                          </Typography>                         

                        </Box>
                        <Box sx={{display:'flex', flexDirection:'row',mt:0.6}}>
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>
                          <Typography sx={{ fontSize: '1rem', ml:1 }} >
                            -24.7(12.1%)
                          </Typography>      

                        </Box>
                        
                        
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start',mr:4 }}>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            423
                          </Typography>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            296
                          </Typography>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            39
                          </Typography>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            33
                          </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-end', mr: 2 }}>
                        <Tooltip title={<span>Total: <strong>423</strong></span>} followCursor slotProps={{
                          tooltip: { sx: {
                            display:'flex',
                            backgroundColor: "white",
                            color:"black" , 
                            boxShadow:3, 
                            height:'25px',
                            width:'40x', 
                            fontSize:"0.8rem",
                            justifyContent:'center',
                            alignItems:'center'
                            } },                         
                          
                          }}>
                            <Box sx={{
                            width: 80,
                            height: 8, 
                            borderTopLeftRadius: 200,
                            borderBottomLeftRadius: 200,
                            backgroundColor: '#006ca5',
                            mb:0.5,
                            mt:0.8,
                            cursor: 'pointer',
                            position: 'relative',
                            '&:hover': {
                              width: 85,
                              height: 13,                              
                              border: '3px solid rgba(255,255,255,0.7)',
                              
                            },
                          }} />
                        </Tooltip>

                        <Tooltip title={<span>ATB: <strong>296</strong></span>} followCursor slotProps={{
                          tooltip: { sx: {
                            display:'flex',
                            backgroundColor: "white",
                            color:"black" , 
                            boxShadow:3, 
                            height:'25px',
                            width:'40x', 
                            fontSize:"0.8rem",
                            justifyContent:'center',
                            alignItems:'center'
                            } },                         
                          
                          }}>
                            <Box sx={{
                            width: 50,
                            height: 8, 
                            borderTopLeftRadius: 200,
                            borderBottomLeftRadius: 200,
                            backgroundColor: '#00b4d8',
                            mb:0.5,
                            mt:2.0,
                            cursor: 'pointer',
                            position: 'relative',
                            '&:hover': {
                              width: 55,
                              height: 13,                              
                              border: '3px solid rgba(255,255,255,0.7)',
                            },
                          }} />
                        </Tooltip>

                        <Tooltip title={<span>WIP: <strong>39</strong></span>} followCursor slotProps={{
                          tooltip: { sx: {
                            display:'flex',
                            backgroundColor: "white",
                            color:"black" , 
                            boxShadow:3, 
                            height:'25px',
                            width:'40x', 
                            fontSize:"0.8rem",
                            justifyContent:'center',
                            alignItems:'center'
                            } },                         
                          
                          }}>
                            <Box sx={{
                            width: 30,
                            height: 8, 
                            borderTopLeftRadius: 200,
                            borderBottomLeftRadius: 200,
                            backgroundColor: '#90e0ef',
                            mb:0.5,
                            mt:2.0,
                            cursor: 'pointer',
                            position: 'relative',
                            '&:hover': {
                              width: 35,
                              height: 13,                              
                              border: '3px solid rgba(255,255,255,0.7)',
                            },
                          }} />
                        </Tooltip>

                        <Tooltip title={<span>USL: <strong>33</strong></span>} followCursor slotProps={{
                          tooltip: { sx: {
                            display:'flex',
                            backgroundColor: "white",
                            color:"black" , 
                            boxShadow:3, 
                            height:'25px',
                            width:'40x', 
                            fontSize:"0.8rem",
                            justifyContent:'center',
                            alignItems:'center'
                            } },                         
                          
                          }}>
                            <Box sx={{
                            width: 20,
                            height: 8, 
                            borderTopLeftRadius: 200,
                            borderBottomLeftRadius: 200,
                            backgroundColor: '#caf0f8',
                            mb:0.5,
                            mt:2.0,
                            cursor: 'pointer',
                            position: 'relative',
                            '&:hover': {
                              width: 25,
                              height: 13,                              
                              border: '3px solid rgba(255,255,255,0.7)',
                            },
                          }} />

                        </Tooltip>
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-end' }}>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          Total
                        </Typography>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          ATB
                        </Typography>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          WIP
                        </Typography>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          USL
                        </Typography>
                      </Box>
                    </Box>

                  </Box>
                  {/* unshippable */}
                  
                  <Box sx={{width:'358px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', borderBottom: 1, borderColor: 'divider', mb: 1 }}>
                      <Typography sx={{mb:0.5,mt:1}}>
                        UNSHIPPABLE
                      </Typography>
                    </Box> 
                    <Typography sx={{ fontSize: '0.75rem',mb:1 }} align="right">
                      DoD
                    </Typography>                     

                    <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'flex-end', mb: 1, }}>
                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start' }}>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          User 
                        </Typography>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          ATB
                        </Typography>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          WIP
                        </Typography>
                        <Typography sx={{ mb: 0.5, fontSize: '1rem' }}>
                          STBL
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start', ml: 2 }}>
                        <Tooltip title={<span>User: <strong>423</strong></span>} followCursor slotProps={{
                          tooltip: { sx: {
                            display:'flex',
                            backgroundColor: "white",
                            color:"black" , 
                            boxShadow:3, 
                            height:'25px',
                            width:'40x', 
                            fontSize:"0.8rem",
                            justifyContent:'center',
                            alignItems:'center'
                            } },                         
                          
                          }}>
                          <Box
                            sx={{
                              width: 80,
                              height: 8,
                              borderTopRightRadius: 200,
                              borderBottomRightRadius: 200,
                              backgroundColor: '#006ca5',
                              mb: 0.5,
                              mt: 0.8,
                              cursor: 'pointer',
                              position: 'relative',
                              '&:hover': {
                                width: 85,
                                height: 13,                              
                                border: '3px solid rgba(255,255,255,0.7)', 
                              },
                            }}
                          />
                        </Tooltip>
                        <Tooltip title={<span>ATB: <strong>296</strong></span>} followCursor slotProps={{
                         tooltip: { sx: {
                           display:'flex',
                           backgroundColor: "white",
                           color:"black" , 
                           boxShadow:3, 
                           height:'25px',
                           width:'40x', 
                           fontSize:"0.8rem",
                           justifyContent:'center',
                           alignItems:'center'
                           } },                         
                         
                         }}>
                          <Box sx={{
                            width: 50,
                            height: 8, 
                            borderTopRightRadius: 200,
                            borderBottomRightRadius: 200,
                            backgroundColor: '#00b4d8',
                            mb:0.5,
                            mt:2.0,
                            cursor: 'pointer',
                            position: 'relative',
                            '&:hover': {
                              width: 55,
                              height: 13,                              
                              border: '3px solid rgba(255,255,255,0.7)',
                            },
                          }} />
                         </Tooltip>
                         <Tooltip title={<span>WIP: <strong>39</strong></span>} followCursor slotProps={{
                         tooltip: { sx: {
                           display:'flex',
                           backgroundColor: "white",
                           color:"black" , 
                           boxShadow:3, 
                           height:'25px',
                           width:'40x', 
                           fontSize:"0.8rem",
                           justifyContent:'center',
                           alignItems:'center'
                           } },                         
                         
                         }}>
                          <Box sx={{
                            width: 30,
                            height: 8, 
                            borderTopRightRadius: 200,
                            borderBottomRightRadius: 200,
                            backgroundColor: '#90e0ef',
                            mb:0.5,
                            mt:2.0,
                            position: 'relative',
                            cursor: 'pointer',
                            '&:hover': {
                              width: 35,
                              height: 13,                              
                              border: '3px solid rgba(255,255,255,0.7)',
                            },
                          }} />
                         </Tooltip>
                         <Tooltip title={<span>STBL: <strong>33</strong></span>} followCursor slotProps={{
                         tooltip: { sx: {
                           display:'flex',
                           backgroundColor: "white",
                           color:"black" , 
                           boxShadow:3, 
                           height:'25px',
                           width:'40x', 
                           fontSize:"0.8rem",
                           justifyContent:'center',
                           alignItems:'center'
                           } },                         
                         
                         }}>
                          <Box sx={{
                            width: 20,
                            height: 8, 
                            borderTopRightRadius: 200,
                            borderBottomRightRadius: 200,
                            backgroundColor: '#caf0f8',
                            mb:0.5,
                            mt:2.0,
                            position: 'relative',
                            cursor: 'pointer',
                            '&:hover': {
                              width: 25,
                              height: 13,                              
                              border: '3px solid rgba(255,255,255,0.7)',
                            },
                          }} />
                         </Tooltip> 
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start',ml:4 }}>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            423
                          </Typography>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            296
                          </Typography>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            39
                          </Typography>
                          <Typography sx={{ mb: 0.5,fontSize: '1rem' }} >
                            33
                          </Typography>
                      </Box> 
                      <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'flex-start',ml:5.2 }}>
                        <Box sx={{display:'flex', flexDirection:'row'}}>
                          <Typography sx={{ fontSize: '1rem', mr:1 }} >
                            -44.7(55.1%)
                          </Typography>
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>                      
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'row', mt:0.4}}>
                          <Typography sx={{ fontSize: '1rem', mr:1 }} >
                            -54.7(10.1%)
                          </Typography> 
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'row', mt:0.4}}>
                          <Typography sx={{ fontSize: '1rem', mr:1 }} >
                            -94.7(18.1%)
                          </Typography> 
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'row',mt:0.6}}>
                          <Typography sx={{ fontSize: '1rem', mr:1 }} >
                            -24.7(12.1%)
                          </Typography> 
                          <ArrowDownwardIcon fontSize="small" sx={{mt:0.1, fontSize: '1.2rem', color: '#21ab21'}}/>
                        </Box>                       
                        
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid2>          

            <Box sx={{display:'flex', flexDirection:'row'}}>            
              <Grid2 item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, boxShadow: 1, width:'26.4vw', mr:4 }}>
                  <CardContent sx={{}}>
                    <Typography  sx={{  mb: 1 }}>CAPACITY</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2 }}>
                        <Grid2 container spacing={1} direction="column">
                          <Grid2 item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="body2" sx={{ flexGrow: 1 }}>Burst Capacity</Typography>
                              <Typography variant="body2" align="right" sx={{ width: '50px' }}>120.2</Typography>
                            </Box>
                          </Grid2>
                          <Grid2 item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="body2" sx={{ flexGrow: 1 }}>Capacity</Typography>
                              <Typography variant="body2" align="right" sx={{ width: '50px' }}>345.2</Typography>
                            </Box>
                          </Grid2>
                          <Grid2 item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="body2" sx={{ flexGrow: 1 }}>Proj Build</Typography>
                              <Typography variant="body2" align="right" sx={{ width: '50px' }}>2345.2</Typography>
                            </Box>
                          </Grid2>
                        </Grid2>
                      </Box>
                      <Box>
                        <HighchartsReact highcharts={Highcharts} options={customPieOptions} />                    
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>

              <Grid2 item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, boxShadow: 1, width: '26.4vw' }}>
                  <CardContent sx={{}}>
                    <Typography  sx={{ mb: 1 }}>WK LTG CAPACITY</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', mr: 2 }}>
                        <Grid2 container spacing={1} direction="column">
                          <Grid2 item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="body2" sx={{ flexGrow: 1 }}>Burst Capacity </Typography>
                              <Typography variant="body2" align="right" sx={{ width: '50px' }}>120.2</Typography>
                            </Box>
                          </Grid2>
                          <Grid2 item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="body2" sx={{ flexGrow: 1 }}>Capacity</Typography>
                              <Typography variant="body2" align="right" sx={{ width: '50px' }}>345.2</Typography>
                            </Box>
                          </Grid2>
                          <Grid2 item xs={12}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                              <Typography variant="body2" sx={{ flexGrow: 1 }}>Proj Build</Typography>
                              <Typography variant="body2" align="right" sx={{ width: '50px' }}>2345.2</Typography>
                            </Box>
                          </Grid2>
                        </Grid2>
                      </Box>
                      <Box>
                        <HighchartsReact highcharts={Highcharts} options={customPieOptions} />                    
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid2>
            </Box>
          </Box>
        </Grid2>

        {/* Bottom Charts Row */}
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 1 , width: '40.9vw' }}>
              <CardContent>
                <Typography sx={{ mb: 1 }}>BACKLOG TREND</Typography>
                <HighchartsReact highcharts={Highcharts} options={barOptions} />
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: 1, width: '40.9vw' }}>
              <CardContent>
                <Typography  sx={{ mb: 1 }}>FACILITY</Typography>
                <HighchartsReact highcharts={Highcharts} options={barOptions} />
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default DellPage;
