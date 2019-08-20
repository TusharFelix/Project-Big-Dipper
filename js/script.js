var brandsSection = document.querySelector(".brands-section");
var brandTemplate = document.querySelector(".brand-template");
var mobileTemplate = document.querySelector(".mobile-card-template");

var brands = {
  Samsung: [
    {
      model: "Galaxy A80",
      price: 90000,
      dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "Note 9",
      price: 76000,
       dateOfRelease:"02-02-2019",
      ratings:4.2,
      ram: "6 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "4000 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jklgxow0/mobile/p/v/3/samsung-galaxy-note-9-sm-n960fzbdins-original-imaf7xa3tjsacs9r.jpeg?q=70"
    },
    {
      model: "Galaxy S10 Plus",
      price: 91900,
       dateOfRelease:"23-02-2018",
      ratings:4.6,
      ram: "8 GB RAM ",
      rom:"512 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "Galaxy S10",
      price: 76000,
       dateOfRelease:"13-09-2018",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"512 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jsdj8nk0/mobile/5/y/g/samsung-galaxy-s10-sm-g973fzwgins-original-imafdys4hrndgfzm.jpeg?q=70"
    },
    {
      model: "Galaxy S9 Plus",
      price: 65000,
       dateOfRelease:"12-05-2018",
      ratings:4.7,
      ram: "8 GB RAM ",
      rom:"64 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jeiukcw0/mobile/e/r/h/samsung-galaxy-s9-plus-sm-g965fzpdins-original-imaf372gapkjg5tp.jpeg?q=70"
    },
    {
      model: "Note 10 Plus",
      price: 79999,
       dateOfRelease:"18-06-2018",
      ratings:4.3,
      ram: "12 GB RAM ",
      rom:"256 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jz1l7rk0/mobile/p/v/8/samsung-galaxy-note-10-plus-sm-n975fzsgins-original-imafj58vd3nxggwr.jpeg?q=70"
    },
    {
      model: "Note 9",
      price: 73600,
       dateOfRelease:"23-09-2019",
      ratings:4.6,
      ram: "6 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jklgxow0/mobile/p/v/3/samsung-galaxy-note-9-sm-n960fzbdins-original-imaf7xa3tjsacs9r.jpeg?q=70"
    },
    {
      model: "Galaxy S10 Plus",
      price: 91900,
       dateOfRelease:"21-07-2018",
      ratings:4.6,
      ram: "8 GB RAM ",
      rom:"512 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jsdj8nk0/mobile/7/n/z/samsung-galaxy-s10-plus-sm-g975fckgins-original-imafdys4d6h8phu6.jpeg?q=70"
    },
    {
      model: "Galaxy S10",
      price: 76900,
       dateOfRelease:"01-01-2018",
      ratings:4.5,
      ram: "12 GB RAM ",
      rom:"1 TB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jsdj8nk0/mobile/7/n/z/samsung-galaxy-s10-plus-sm-g975fckgins-original-imafdys4d6h8phu6.jpeg?q=70"
    },
    {
      model: "Galaxy S9 Plus",
      price: 57900,
       dateOfRelease:"03-01-2019",
      ratings:4.7,
      ram: "6 GB RAM ",
      rom:"64 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jeiukcw0/mobile/e/r/h/samsung-galaxy-s9-plus-sm-g965fzpdins-original-imaf372gapkjg5tp.jpeg?q=70"
    },
    {
      model: "Note 10 Plus",
      price: 90000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "Note 9",
      price: 70000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "Galaxy S10 Plus",
      price: 65000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "Galaxy S10",
      price: 60000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "Galaxy S9 Plus",
      price: 65000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    }
  ],
  Apple: [
    {
      model: "iphone Xr",
      price: 59999,
       dateOfRelease:"25-07-2018",
      ratings:4.6,
      ram: "8 GB RAM ",
      rom:"64 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/y/q/d/apple-iphone-xr-mry52hn-a-original-imafa6zkfgwpnsgz.jpeg?q=70"
    },
    {
      model: "iphone Xs",
      price: 114900,
       dateOfRelease:"08-01-2018",
      ratings:4.2,
      ram: "6 GB RAM ",
      rom:"156 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/y/4/u/apple-iphone-xs-mt9l2hn-a-original-imaf97f65bqbdycy.jpeg?q=70"
    },
    {
      model: "iphone 8 plus",
      price: 61490,
       dateOfRelease:"23-02-2019",
      ratings:4.6,
      ram: "6 GB RAM ",
      rom:"64 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/j7ksia80/mobile/t/4/f/apple-iphone-8-plus-mq8g2hn-a-original-imaexsfhxepbngdq.jpeg?q=70"
    },
    {
      model: "iphone 8",
      price: 61490,
       dateOfRelease:"10-04-2018",
      ratings:4.4,
      ram: "6 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/j7ksia80/mobile/t/4/f/apple-iphone-8-plus-mq8g2hn-a-original-imaexsfhxepbngdq.jpeg?q=70"
    },
    {
      model: "Apple iPhone 6s",
      price: 29799,
       dateOfRelease:"08-03-2017",
      ratings:4.5,
      ram: "4 GB RAM ",
      rom:"32 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/6/t/q/apple-iphone-6s-mn0w2hn-a-original-imaexw6smfzjgqsz.jpeg?q=70"
    },
    {
      model: "Apple iPhone 6s",
      price: 34999,
       dateOfRelease:"18-07-2017",
      ratings:4.2,
      ram: "3 GB RAM ",
      rom:"32 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/h/f/t/apple-iphone-6s-mn0x2hn-a-original-imaexw7fpbbfwwtw.jpeg?q=70"
    },
    {
      model: "Apple iPhone 7 (Rose Gold, 32 GB)",
      price: 36999,
       dateOfRelease:"11-11-2017",
      ratings:4.4,
      ram: "3 GB RAM ",
      rom:"32 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/8/5/t/apple-iphone-7-mn912hn-a-original-imaexwzngmvhunxr.jpeg?q=70"
    },
    {
      model: "iphone 8",
      price: 65000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
   
    {
      model: "Apple iPhone 8 (PRODUCT)RED (Red, 64 GB)",
      price: 53490,
       dateOfRelease:"06-06-2017",
      ratings:4.2,
      ram: "4 GB RAM ",
      rom:"64 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jgffp8w0/mobile/g/g/c/apple-iphone-8-product-red-special-edition-mrrk2hn-a-original-imaf4gudf5bzzxht.jpeg?q=70"
    },
    {
      model: "Apple IPhone 4 (Black, 8 GB)",
      price: 20824,
       dateOfRelease:"23-02-2019",
      ratings:4,
      ram: "2 GB RAM ",
      rom:"8 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/mobile/h/e/n/apple-iphone-4-original-imadknfx36wrgvug.jpeg?q=70"
    },
    {
      model: "Apple iPhone 7 (Silver, 128 GB)",
      price: 47999,
       dateOfRelease:"23-02-2019",
      ratings:4.5,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/g/g/f/apple-iphone-7-mn8y2hn-a-original-imaexwzn8ynwbhtj.jpeg?q=70"
    }
  ],
  Oneplus: [
    {
      model: "OnePlus 7 Pro",
      price: 58000,
       dateOfRelease:"23-02-2019",
      ratings:4.6,
      ram: "8 GB RAM ",
      rom:"256 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jwuzzww0/cases-covers/front-back-case/r/p/d/flipkart-smartbuy-op7p-gkk-red-original-imafhg72hjhfygkh.jpeg?q=70"
    },
    {
      model: "One Plus 5 (Black, 128 GB)  (8 GB RAM)",
      price: 40000,
       dateOfRelease:"28-12-2016",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/je34pzk0/mobile/y/w/t/oneplus-one-plus-5-5-original-imaffndueqpcttgz.jpeg?q=70"
    },
    {
      model: "OnePlus 6 T",
      price: 38000,
       dateOfRelease:"15-01-2018",
      ratings:4.8,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jr58l8w0/cases-covers/back-cover/f/z/t/unirock-ubc-46-original-imafcbxkqthkrgxw.jpeg?q=70"
    },
    {
      model: "OnePlus 6",
      price: 37999,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "OnePlus 7 T",
      price: 53000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "OnePlus 7",
      price: 40000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "OnePlus 6 Pro",
      price: 40000,
       dateOfRelease:"23-02-2019",
      ratings:4.2,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "OnePlus 6",
      price: 35000,
       dateOfRelease:"23-02-2019",
      ratings:4.5,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jeykeq80/mobile/n/q/v/oneplus-oneplus-5-a5000-original-imaf3jfkg8jkhdfh.jpeg?q=70"
    },
    {
      model: "OnePlus 5 (Slate Gray, 128 GB)  (8 GB RAM)",
      price: 37999,
       dateOfRelease:"15-01-2017",
      ratings:4.3,
      ram: "6 GB RAM ",
      rom:"64 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jeykeq80/mobile/n/q/v/oneplus-oneplus-5-a5000-original-imaf3jfkg8jkhdfh.jpeg?q=70"
    },
    {
      model: "OnePlus 7T pro",
      price: 56000,
       dateOfRelease:"10-10-2017",
      ratings:4.2,
      ram: "16 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "OnePlus 6 T Pro",
      price: 60000,
       dateOfRelease:"05-12-2018",
      ratings:4.6,
      ram: "8 GB RAM ",
      rom:"128 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    },
    {
      model: "OnePlus",
      price: 35000,
       dateOfRelease:"29-04-2019",
      ratings:4.6,
      ram: "16 GB RAM ",
      rom:"256 GB ROM",
      screenSize:"17.02 cm (6.7 inch) Full HD+ Display",
      camera:"48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera",
      battery: "3700 mAh Battery",
      processor: "Qualcomm Snapdragon 730G Octa-Core Processor",
      modelNumber:"SM-A805FZDUINS",
      color:"Angel Gold",
      simType:"Dual Sim",
      hybridSimSlot:"No",
      otg_Compatible:"Yes",
      imageUrl: "https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70"
    }
  ]
};

function renderApp(brands) {
  for (var brand in brands) {
    createMobileBrand(brand, brands[brand]);
  }
}

function createMobileBrand(brandTitle, brandModels) {
  var newBrand = brandTemplate.cloneNode(true);
  var newBrandModelsContainer = newBrand.querySelector(".brand-models");
  newBrand.classList.remove("brand-template");
  newBrand.querySelector(".brand-title").innerText = brandTitle;
  brandModels.forEach(function(mobile) {
    newBrandModelsContainer.appendChild(createMobilecard(mobile));
  });
  brandsSection.appendChild(newBrand);
}

function createMobilecard(model) {
  var mobile = mobileTemplate.cloneNode(true);
  mobile.classList.remove("mobile-card-template");
  mobile.querySelector(".mobile-name").innerText = model["model"];
  mobile.querySelector(".mobile-ram").innerText = model["ram"];
  mobile.querySelector(".mobile-price").innerText = model["price"];
  return mobile;
}

(function() {
  renderApp(brands);
})();
