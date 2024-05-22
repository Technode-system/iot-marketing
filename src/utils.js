import product from './assets/img/svg/product.svg'
import industries from './assets/img/svg/industries.svg'
import services from './assets/img/svg/services.svg'
import applications from './assets/img/svg/applications.svg'

import category_1 from './assets/img/svg/category_1.svg'
import category_2 from './assets/img/svg/category_2.svg'
import category_3 from './assets/img/svg/category_3.svg'
import category_4 from './assets/img/svg/category_4.svg'

import { Button, styled } from '@mui/material';

import slider1 from './assets/img/slider1.jpg'
import slider2 from './assets/img/slider2.jpg'

import psa_1 from './assets/img/products/psa_1.jpg'
import psa_2 from './assets/img/products/psa_2.jpg'
import psa_3 from './assets/img/products/psa_3.jpg'
// import psa_4 from './assets/img/products/psa_4.jpg'

import gateway_1 from './assets/img/products/gateway_1.jpg'
import gateway_2 from './assets/img/products/gateway_2.jpg'
import gateway_3 from './assets/img/products/gateway_3.jpg'

import sms_2 from './assets/img/products/sms_2.jpg'
// import gateway_4 from './assets/img/products/gateway_4.jpg'

import phase from './assets/phase.pdf'
import sms from './assets/sms.pdf'
import t3 from './assets/t3.pdf'

export const navItems = [{
    navTitle: 'Product',
    svg: product,
    path: '/products'
}, {
    navTitle: 'Store',
    svg: industries,
    path: '/store'
},
{
    navTitle: 'Services',
    svg: services,
    path: '/products'
},
{
    navTitle: 'Application',
    svg: applications,
    path: '/products'
}
];


export const navList = [{
    navTitle: 'About',
    path: '/products'
}, {
    navTitle: 'Blogs',
    path: '/products'
},
{
    navTitle: 'Career',
    path: '/products'
},
{
    navTitle: 'Contact',
    path: '/products'
},
{
    navTitle: 'Login',
    path: '/products',
    primaryButton: true,
},
{
    navTitle: 'Get Quote',
    path: '/products',
    secondaryButton: true,
}
];



export const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    borderRadius: 0,
    lineHeight: 1.5,
    backgroundColor: '#fff',
    borderColor: '#fff',
    margin: '6px',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#007ff0',
        color: '#fff',
        borderColor: '#007ff0',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export const products = [
    {
        id: 1,
        pageTitle: "Power Sense Alert",
        productImage: [
            psa_1,
            psa_2,
            psa_3,
            // psa_4
        ],
        summary: "Power sense alert device notify user about any changes in power conditions Via SMS & CALL. Device accurately measures the three-phase or single-phase input voltage and based on low / high voltage settings, alerts the user about changing power conditions",
        features: [
            "3 PHASE & 1 PHASE INPUT",
            "INSTANT SMS & CALL ALERTS",
            "LOW & HIGH VOLTAGE NOTIFICATION",
            "STORE UP TO 10 MOBILE NUMBERS",
            "SUPPORT ALL 2G / 4G SIM CARDS",
            "24 HOURS INBUILT BATTERY BACKUP",
            "ALARM / SIREN OUTPUT FOR LOCAL NOTIFICATION",
            "CONFIGURABLE SMS TEXT FORMATS",
            "CONFIGURABLE LOW & HIGH VOLTAGE SETTINGS"
        ],
        specifications: [
            { key: 'Input Voltage', value: '12V DC , 2 Amp' },
            {
                key: 'Cellular Technology',
                value: `4G LTE-FDD / LTE-TDD
                        B1/B3/B5/B8 B34/B38/B39/B40/B41
                        & GSM (800/850/900/950)`
            },
            { key: 'SIM Card Compatibility', value: '3V and 1.8V - Micro SIM-Card' },
            { key: 'Antenna', value: '3dbi – 3.5dbi External Antenna' },
            { key: 'Power sense', value: '3 Phase and 1 Phase' },
            { key: 'Sensing Voltage', value: 'Min- 180 V Max – 510 V AC ' },
            { key: 'Relay Output', value: '1nos 250VAC/30VDC, 5Amp – NO/NC contact' },
            { key: 'Battery', value: 'Li-ion 3.7V, 1200mAh' },
            { key: 'Indication', value: '5 LED – Power, Signal, Network, Status, SMS' },
            { key: 'Maximum user number', value: '10 Mobile Numbers' },
            { key: 'Configuration', value: 'SMS' },
            { key: 'Operating Temperature', value: '0 to 55 Degree C' },
            { key: 'Humidity', value: '95% RH' },
            { key: 'Dimension (L x W x H)', value: '110 x 110 x 25 (in mm)' },
            {
                key: `Weight (with Antenna & 
                Adaptor)`,
                value: '0.32 kg - Approx.'
            },
        ],
        applications: {
            title: "About Product",
            content: [
                "Power sense alert device notify user about any changes in power conditions Via SMS & CALL.",
                "Device accurately measures the three-phase or single-phase input voltage and based on low / high ",
                "voltage settings, alerts the user about changing power conditions. Device gives instant SMS & call",
                "alert to stored mobile number along with alarm output. Device can be attached to any power ",
                "distribution system to monitor the power conditions. Device has inbuilt battery backup which",
                "provides 24x7 continuous monitoring of any phase supply. Device keep your critical load safe by ",
                "notifying user about change in power conditions so that user can take appropriate action to stop further loss",
                "Power Sense Alert Device is a reliable solution which can effectively used in Many industries to Monitor the power cut off",
                "Our Unit find its application in Pharm & Medical Industries, Cold chain Industry, Server Rooms and ISP's, Aquaculture and Poultry and in Industrial Power cuts etc."
            ]
        },
        additionalSection: {
            image: psa_1,
            text: "Get Notified about your site's power conditions! Power Cut and Power Resumption Notifications via SMS and call.",
            bgColor: "#4663ae"
        },
        downloads: [
            {
                id: 1,
                name: 'Product Brochure',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-download-fiche.svg',
                pdfUrl: phase,
            },
            {
                id: 2,
                name: 'Product Manual',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-download-install.svg',
                pdfUrl: 'https://example.com/pdf2.pdf',
            },
            {
                id: 3,
                name: 'Video tutorials',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-play-tuto.svg',
                pdfUrl: 'https://youtu.be/ZbcJ0uT-nV0?si=hceek6qIZxP-m8va',
            },
        ]
    },
    {
        id: 2,
        pageTitle: "SMS Alert Modem",
        productImage: ["https://technode.co.in/assets/img/pro/X3.png",
            "https://technode.co.in/assets/img/pro/X1.png",
            "https://technode.co.in/assets/img/pro/X2.png"
        ],
        summary: "SMS Alert Modem, alerts user via SMS & Call based on different conditions at 8 potential free Digital Inputs. Connect any Digital Input like Machine, Sensor or PLC and get the Instant alert on High / Low conditions",
        features: [
            "Instant SMS / Call Alert",
            "8 Digital Inputs ",
            "2 Digital Outputs",
            "4G Based Connectivity",
            "Configurable SMS Text Formats",
            "32 Kb Inbuilt Storage",
            "9 ~ 28V Wide Supply range",
            "ARM CPU Based Smart Operation"
        ],
        specifications: [
            { key: 'Input Voltage', value: '12V DC , 2 Amp' },
            {
                key: 'Cellular Technology',
                value: `4G LTE-FDD / LTE-TDD
                        B1/B3/B5/B8 B34/B38/B39/B40/B41
                        & GSM (800/850/900/950)`
            },
            { key: 'SIM Card Compatibility', value: '3V and 1.8V - Micro SIM-Card' },
            { key: 'Antenna', value: '3dbi – 3.5dbi External Antenna' },
            { key: 'Power sense', value: '3 Phase and 1 Phase' },
            { key: 'Sensing Voltage', value: 'Min- 180 V Max – 510 V AC ' },
            { key: 'Relay Output', value: '1nos 250VAC/30VDC, 5Amp – NO/NC contact' },
            { key: 'Battery', value: 'Li-ion 3.7V, 1200mAh' },
            { key: 'Indication', value: '5 LED – Power, Signal, Network, Status, SMS' },
            { key: 'Maximum user number', value: '10 Mobile Numbers' },
            { key: 'Configuration', value: 'SMS' },
            { key: 'Operating Temperature', value: '0 to 55 Degree C' },
            { key: 'Humidity', value: '95% RH' },
            { key: 'Dimension (L x W x H)', value: '110 x 110 x 25 (in mm)' },
            {
                key: `Weight (with Antenna & 
                Adaptor)`,
                value: '0.32 kg - Approx.'
            },
        ],
        applications: {
            title: "About Product",
            content: [
                "SMS Alert Modem Finds verity of applications in Industrial automation and process instrumentation. ",
                "This Modem has 8 potential free digital inputs, which can be utilized to monitor multiple parameters/alarms in a machine or a process instrument. ",
                "Modem send instant SMS / call alert on registered user numbers in case of change in state of digital input.Different SMS Text formats can be set as per the application convenience. ",
                "A Standard 24V DC supply can be provided to the modem. Modem is DIN rail compatible and has a robust industrial design.",
                "4G Connectivity ensures instant delivery of SMS as compared to old GPRS technology. Along with 8 Digital Inputs, modem also has 2 Digital Outputs which can be utilized for controlling some load up to 5A. "

            ]
        },
        additionalSection: {
            image: sms_2,
            // image: "https://res.cloudinary.com/dbnkus2ij/image/upload/v1706008138/X1-removebg-preview_vjjg5l.png",
            text: "Wants to Monitor the Machine state? or Wish to know status of your Industrial Devices. This product keep you notified regarding the status.",
            bgColor: "#3284ff"
        },
        downloads: [
            {
                id: 1,
                name: 'Product Brochure',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-download-fiche.svg',
                pdfUrl: sms,
            },
            {
                id: 2,
                name: 'Product Manual',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-download-install.svg',
                pdfUrl: 'https://example.com/pdf2.pdf',
            },
            {
                id: 3,
                name: 'Video tutorials',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-play-tuto.svg',
                pdfUrl: 'https://youtu.be/ZbcJ0uT-nV0?si=hceek6qIZxP-m8va',
            },
        ]
    },
    {
        id: 3,
        pageTitle: "IOT Gateway",
        productImage: [
            gateway_1,
            gateway_2,
            gateway_3,
            // gateway_4
        ],
        summary: "IOT Gateway is an internet enabled data logger, which can read data from any MODBUS RTU RS485. Slave device and send data to web based dashboard for further analysis. Logged data can be used for purpose of audits, Monitoring  and Data analysis.",
        features: [
            "4G/Wi-Fi Based connectivity",
            "Configurable MQTT Cloud Options",
            "Embedded WebServer for easy configuration",
            "Data Visualization on Technode IOT Dashboard",
            "2 Digital Inputs",
            "2 4-20mA Analog Inputs",
            "1 RS485 MODBUS RTU Port",
            "DIN Rail / Wall Mounting Option",
            "12V-28V Wide Power Supply Range"
        ],
        specifications: [
            { key: 'Input Voltage', value: '12V DC , 2 Amp' },
            {
                key: 'Cellular Technology',
                value: `4G LTE-FDD / LTE-TDD
                        B1/B3/B5/B8 B34/B38/B39/B40/B41
                        & GSM (800/850/900/950)`
            },
            { key: 'SIM Card Compatibility', value: '3V and 1.8V - Micro SIM-Card' },
            { key: 'Antenna', value: '3dbi – 3.5dbi External Antenna' },
            { key: 'Power sense', value: '3 Phase and 1 Phase' },
            { key: 'Sensing Voltage', value: 'Min- 180 V Max – 510 V AC ' },
            { key: 'Relay Output', value: '1nos 250VAC/30VDC, 5Amp – NO/NC contact' },
            { key: 'Battery', value: 'Li-ion 3.7V, 1200mAh' },
            { key: 'Indication', value: '5 LED – Power, Signal, Network, Status, SMS' },
            { key: 'Maximum user number', value: '10 Mobile Numbers' },
            { key: 'Configuration', value: 'SMS' },
            { key: 'Operating Temperature', value: '0 to 55 Degree C' },
            { key: 'Humidity', value: '95% RH' },
            { key: 'Dimension (L x W x H)', value: '110 x 110 x 25 (in mm)' },
            {
                key: `Weight (with Antenna & 
                Adaptor)`,
                value: '0.32 kg - Approx.'
            },
        ],
        applications: {
            title: "About Product",
            content: [
                "IOT Gateway is a Wireless GSM/Wi-Fi Enabled Device which can read data from any MODBUS RTU Enabled Equipment and send the processed data to any MQTT Enabled Cloud.",
                "Our IOT Gateway device TIG-101 is having 1 MODBUS RTU Serial Communication port and 2 Digital/Analog Input Ports for interfacing of different industrial process instruments or Sensors.",
                "TIG-101 can be interfaced with different MODBUS slave devices like Energy Meters, Flow Meters, Temperature scanners, PLCs etc.",
                "The MODBUS Parameters such as Baud rate, parity, Stop bits and Register address map can be configured inside the Device using embedded web server Software.",
                "The Device can process Maximum 200 parameters/tags at a time. TIG-101 has rugged industrial ABS Enclosure Design and DIN rail/ wall mounting facility for easy installation. ",
                "TIG-101 Gateway support 12V-28VDC Wide Power Supply range and has High voltage spike protection against network transients. The Device firmware can be updated remotely over the air for maintenance purposes",
                ". Device can be connected to our Technode IOT Dashboard for visualization and management of your machine / things data"

            ]
        },
        additionalSection: {
            image: gateway_1,
            text: "Wants to Monitor the Machine state? or Wish to know status of your Industrial Devices. This product keep you notified regarding the status.",
            bgColor: "#3284ff"
        },
        downloads: [
            {
                id: 1,
                name: 'Product Brochure',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-download-fiche.svg',
                pdfUrl: t3,
            },
            {
                id: 2,
                name: 'Product Mannual',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-download-install.svg',
                pdfUrl: 'https://example.com/pdf2.pdf',
            },
            {
                id: 3,
                name: 'Video tutorials',
                imageUrl: 'https://enless-wireless.com/wp-content/themes/bridge-child/img/ico-play-tuto.svg',
                pdfUrl: 'https://youtu.be/3DQn0K0ap84?si=cL4pXCdgYpq94TQz',
            },
        ]
    }
];


export const sliderList = [{
    buttonText: "Learn more...",
    label: "Embedded System Solutions for Industry 4.0 ",
    // description: [
    //     "GSM Enabled Devices",
    //     "IOT Gateways",
    //     "Wireless Modems",
    //     "I/O Controllers"],
    img_url: slider2,
    detailsPageUrl: '/products/1'
},
{
    buttonText: "Learn more...",
    label: "Electronics Product Design for Industry 4.0",
    // description: ["Process Indicators",
    //     "Process Controllers",
    //     "Analog Sensors",
    //     "Custom HMI’s"],
    img_url: slider1,
    detailsPageUrl: '/products/3'
}
];

export const getProductById = (id) => {
    return products?.find((product) => product.id == id)
}

export const categories = [{
    svg: category_1,
    label: 'Embedded systems',
    description: 'We have designed different Embedded system solutions for verity of Industrial applications, which includes process instruments, Automation and IOT. Most of our solutions are build around Real time Operating system and Wireless protocols. We hold good Market share for SMS alert devices and IOT systems.'
},
{
    svg: category_2,
    label: 'IOT Dashboard',
    description: 'We have designed our own IOT Dashboard solution, which can be utilized for different industrial applications. Our dashboard solution is a multiuser drag and drop type, SaaS application which can be accessed by used on any web browser from anywhere in the world. Application is quite useful in data monitoring, control and analysis.'
},
{
    svg: category_3,
    label: 'Best in Class Support',
    description: 'We believe in customer centric growth. We are always eager to listen from customers. So, whether it’s a suggestion, compliment or a complaint we are always available for our customers. Customers can always reach out to us via Email or WhatsApp. We believe in our after-sales support system and integrity with the oldest customer.'
},
{
    svg: category_4,
    label: 'Research & Development',
    description: 'We believe Research and Development plays a crucial part in grown of every organization. Without continuous research and development, it is nearly impossible to achieve remarkable success. So, we always try to keep up with the pace but at the same to keep doing more and more research and development to improve our systems and products.'
}
];
export default products;