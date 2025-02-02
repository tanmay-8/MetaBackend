const nodemailer = require("nodemailer");

require("dotenv").config();

const sendMail = async (email, pid) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.BACKEND_MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.BACKEND_MAIL_USER,
                pass: process.env.BACKEND_MAIL_PASSWORD,
            },
        });

        let info = await transporter.sendMail({
            from: process.env.BACKEND_MAIL_USER,
            to: email,
            subject: "Registration Successful - Metamorphosis 2K25",
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
      rel="stylesheet"
    />
    <title>METAMORPHOSIS 2K25</title>

    <!-- <title>Responsive GIF Display</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0;
            text-align: center;
        }
        .gif-container {
            max-width: 600;
            overflow: hidden;
        }
        img {
            width: 600;
            display: block;
        }
        
    </style> -->
  </head>

  <body style="font-family: 'Poppins', sans-serif">
    <div>
      <u></u>

      <div
        style="
          text-align: center;
          margin: 0;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 0;
          padding-right: 0;
          background-color: #f2f4f6;
          color: #000000;
        "
        align="center"
      >
        <div style="text-align: center">
          <table
            align="center"
            style="
              text-align: center;
              vertical-align: middle;
              width: 600px;
              max-width: 600px;
            "
            width="600"
          >
            <tbody>
              <tr>
                <td
                  style="width: 596px; vertical-align: middle"
                  width="596"
                ></td>
              </tr>
            </tbody>
          </table>
          
          <!-- <div class="gif-container"> -->
          <img
            style="text-align: center"
            alt="META 2K25 Banner"
            src="https://res.cloudinary.com/dfuwno067/image/upload/v1738444246/META_Banner_e0joky.png"
            width="600"
            class="CToWUd a6T"
            data-bit="iit"
            tabindex="0"
          />

          <div
            class="a6S"
            dir="ltr"
            style="opacity: 0.01; left: 552px; top: 501.5px"
          >
            <div
              id=":155"
              class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q"
              role="button"
              tabindex="0"
              aria-label="Download attachment "
              jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTc2MjU0MTQxMTA0MjYyMTM2NyIsbnVsbCxbXV0."
              data-tooltip-class="a1V"
              data-tooltip="Download"
            >
              <div class="akn">
                <div class="aSK J-J5-Ji aYr"></div>
              </div>
            </div>
          </div>

          <table
            align="center"
            style="
              text-align: center;
              vertical-align: top;
              width: 600px;
              max-width: 600px;
              background-color: #ffffff;
            "
            width="600"
          >
            <tbody style="color: #343434">
              <tr>
                <td
                  style="
                    width: 596px;
                    vertical-align: top;
                    padding-left: 30px;
                    padding-right: 30px;
                    padding-top: 30px;
                    padding-bottom: 40px;
                  "
                  width="596"
                >
                  <h1
                    style="
                      font-size: 22px;
                      line-height: 34px;
                      font-family: 'Helvetica', Arial, sans-serif;
                      font-weight: 600;
                      text-decoration: none;
                      color: #000000;
                    "
                  >
                    Hola Tech Enthusiasts! 🐧
                  </h1>

                  <p
                    style="
                      line-height: 24px;
                      font-weight: 400;
                      text-decoration: none;
                    "
                  >
                    We are pleased to inform you that your registration for
                    <strong>MetaMorphosis 2K25</strong> was successful! 🎉<br /><br />
                    The event will be held on
                    <strong><em>15th & 16th of February, 2025</em></strong
                    >, focusing on Docker & Kubernetes.💜
                  </p>
                  <p>
                    <strong>Participant ID:</strong> <span style="font-weight: bold; color: #4879e2;"> Meta_${pid} </span>
                  </p>
                  You will have access to all the sessions and activities we
                  have scheduled for the event as a registered participant.
                  <br />
                  <p>
                    Details of the event are as follows: <br />
                    <strong>Date:</strong> 15th & 16th of February, 2025 <br />
                    <strong>Time:</strong> 9:00 AM <br />
                    <strong>Venue:</strong>
                    Main & Mini CCF, WCE
                  </p>
                  Please do not hesitate to contact us if you have any queries
                  about the event. We will be happy to assist you in any way we
                  can.
                  <p></p>
                  <p>
                    <strong style="font-size: 17px">
                      MetaMorphosis 2K25 Website:</strong
                    >
                    <a
                      href="https://meta2k25.vercel.app/"
                      style="font-size: 17px"
                      >meta2k25.wcewlug.org</a
                    >
                    <br />
                    Do share this with your friends and join us for an exciting
                    journey!
                  </p>

                  <p>
                    <strong>
                      <i>We look forward to seeing you there!</i>
                    </strong>
                  </p>

                  <p>
                    Thanks and regards,<br />
                    Walchand Linux Users' Group
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

        <table
          align="center"
          style="
            text-align: center;
            vertical-align: top;
            width: 600px;
            max-width: 600px;
            background-color: #ffffff;
          "
          width="600"
        >
          <tbody>
            <tr>
              <td
                style="
                  width: 600px;
                  vertical-align: top;
                  padding-left: 0;
                  padding-right: 0;
                "
              >
                <img
                  style="
                    text-align: center;
                    border-top-left-radius: 30px;
                    border-bottom-right-radius: 30px;
                    margin-bottom: 5px;
                  "
                  alt="Logo"
                  src="https://res.cloudinary.com/dduur8qoo/image/upload/v1689771850/wlug_white_logo_page-0001_u8efnh.jpg"
                  align="center"
                  width="200"
                  height="120"
                  class="CToWUd"
                  data-bit="iit"
                />
              </td>
            </tr>

            <tr style="margin-bottom: 30px" align="center">
              <td align="center">
              
                <a
                  href="https://linkedin.com/company/wlug-club"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=https://linkedin.com/company/wlug-club&amp;source=gmail&amp;ust=1680976985984000&amp;usg=AOvVaw0TDo2Akq1O-un9s_gRi70t"
                  style="margin: 0 10px"
                  ><img
                    src="https://res.cloudinary.com/dduur8qoo/image/upload/v1685247353/linkedin_mg2ujv.png"
                    class="CToWUd"
                    data-bit="iit"
                    height="30"
                    width="30"
                    style="border-radius: 5px"
                /></a>
                <a
                  href="http://discord.wcewlug.org/join"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=http://discord.wcewlug.org/join&amp;source=gmail&amp;ust=1680976985984000&amp;usg=AOvVaw3PNiAyDSeiO1V36KVKeLZl"
                  style="margin: 0 1px"
                  ><img
                    src="https://res.cloudinary.com/dduur8qoo/image/upload/v1689771996/unnamed_m7lgs0.png"
                    class="CToWUd"
                    data-bit="iit"
                    height="30"
                    width="30"
                    style="border-radius: 5px"
                /></a>
                <a
                  href="https://www.instagram.com/wcewlug/"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/wcewlug/&amp;source=gmail&amp;ust=1680976985984000&amp;usg=AOvVaw16ObtJOZ1hpw9644RZ4oMM"
                  style="margin: 0 12px"
                  ><img
                    src="https://res.cloudinary.com/dduur8qoo/image/upload/v1689773467/Instagram_vn7dni_kzulby.png"
                    class="CToWUd"
                    data-bit="iit"
                    height="30"
                    width="30"
                /></a>
                <a
                  href="https://twitter.com/wcewlug"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/wcewlug&amp;source=gmail&amp;ust=1680976985984000&amp;usg=AOvVaw1ypHRKREADjq_cn0IRD2po"
                  ><img
                    src="https://res.cloudinary.com/dfuwno067/image/upload/v1738444243/twitter_wxkrwu.png"
                    class="CToWUd"
                    data-bit="iit"
                    height="30"
                    width="30"
                    style="border-radius: 5px"
                /></a>
              </td>
            </tr>
          </tbody>
        </table>
          <div class="yj6qo"></div>
          <div class="adL"></div>
        </div>
        <div class="adL"></div>
      </div>
      <div class="adL"></div>
    </div>
  </body>
</html>
`,
        });

        return {
            info: info,
            success: true,
        };
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = { sendMail };
