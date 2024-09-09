import React from 'react'
import MicrosoftCertificate from "../Assets/MicrosoftStudentLeraning.png"
import MicrosoftCerfLogo from "../Assets/MicrosoftStudentProgramLogo.png"
import GoogleStudentCerti from "../Assets/GoogleDeveloper.png"
import GoogleCertiLogo from "../Assets/GoogleDeveloperLogo.png"
import NPTELLogo from "../Assets/NPTELLogo.png"
// import NPTELPython from "../Assets/NPTELPython.png"
import ShowMoreCertificate from '../ShowMoreCertificate'
import NPTELJOC from "../Assets/NPTEL- Joy Of Computing.jpg"
import NPTELPDSA from "../Assets/NPTEL- PDSA Using Python.jpg"
import NPTELIOT from "../Assets/NPTEL- IOT.jpg"
// import from "../Assets/"
// import from "../Assets/"
import { useState } from 'react'

const CertificateArr = [
    {
        Name: "Programming, Data Structures and Algorithms Using Python",
        Image: NPTELPDSA,
        Logo: NPTELLogo,
        Link: "https://nptel.ac.in/noc/E_Certificate/NPTEL22CS70S1324179809017022"
    },
    {
        Name: "Introduction to Internet of Things",
        Image: NPTELIOT,
        Logo: NPTELLogo,
        Link: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS83S73430821020378805"
    },
    {
        Name: "The Joy of Computing Using Python",
        Image: NPTELJOC,
        Logo: NPTELLogo,
        Link: "https://nptel.ac.in/noc/E_Certificate/NPTEL23CS108S53430411520378805"
    },
    {
        Name: "Google Developer Student Club",
        Image: GoogleStudentCerti,
        Logo: GoogleCertiLogo,
        Link: "#"
    },
    {
        Name: "Microsoft Student Ambassador Program",
        Image: MicrosoftCertificate,
        Logo: MicrosoftCerfLogo,
        Link: "#"
    }
]

const Certificate = ({ setActiveNavbar }) => {
    const [ShowCertificate, setShowCertificate] = useState(false);
    return (
        <section id="Certificate" onMouseEnter={() => setActiveNavbar("Certificate")}>
            <h1>Certificates</h1>
            <div id="Centerline"></div>
            <div id="AllCertificates">
                {
                    CertificateArr.slice(0,2).map((curr, ids) => {
                        return <div id={ids % 2 === 0 ? 'certificatesCardLeft' : 'certificatesCardRight'} key={ids}>
                            <img src={curr.Image} alt="Certificate" onClick={()=>window.open(curr.Link,'_blank')}/>
                            <img src={curr.Logo} alt="Logo" />
                        </div>
                    })
                }
                <button className='seeMore' onClick={() => setShowCertificate(!ShowCertificate)}>SEE <br /> MORE</button>
                {
                    ShowCertificate &&
                    <ShowMoreCertificate CertificateArr={CertificateArr} ShowCertificate={ShowCertificate} setShowCertificate={setShowCertificate} />
                }
            </div>
        </section>

    )
}

export default Certificate