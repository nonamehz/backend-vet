const template = (aceptado) => {

    let titulo;
    let mensaje;

    if (aceptado) {
        titulo = '¡Solicitud Aceptada!';
        mensaje = 'Tu solicitud de adopción fue aceptada, puedes acercarte a la veterinaria para culminar el proceso.'
    } else {
        titulo = 'Solicitud Rechazada';
        mensaje = 'Lamentamos informarte que la solicitud no procede, muchas gracias.'
    }

    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <style class="darkreader darkreader--fallback" media="screen"></style>
        <style class="darkreader darkreader--text" media="screen"></style>
        <style class="darkreader darkreader--invert" media="screen">
            .jfk-bubble.gtx-bubble,
            .captcheck_answer_label>input+img,
            span#closed_text>img[src^="https://www.gstatic.com/images/branding/googlelogo"],
            span[data-href^="https://www.hcaptcha.com/"]>#icon,
            #bit-notification-bar-iframe,
            ::-webkit-calendar-picker-indicator {
                filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
            }
        </style>
        <style class="darkreader darkreader--inline" media="screen">
            [data-darkreader-inline-bgcolor] {
                background-color: var(--darkreader-inline-bgcolor) !important;
            }
    
            [data-darkreader-inline-bgimage] {
                background-image: var(--darkreader-inline-bgimage) !important;
            }
    
            [data-darkreader-inline-border] {
                border-color: var(--darkreader-inline-border) !important;
            }
    
            [data-darkreader-inline-border-bottom] {
                border-bottom-color: var(--darkreader-inline-border-bottom) !important;
            }
    
            [data-darkreader-inline-border-left] {
                border-left-color: var(--darkreader-inline-border-left) !important;
            }
    
            [data-darkreader-inline-border-right] {
                border-right-color: var(--darkreader-inline-border-right) !important;
            }
    
            [data-darkreader-inline-border-top] {
                border-top-color: var(--darkreader-inline-border-top) !important;
            }
    
            [data-darkreader-inline-boxshadow] {
                box-shadow: var(--darkreader-inline-boxshadow) !important;
            }
    
            [data-darkreader-inline-color] {
                color: var(--darkreader-inline-color) !important;
            }
    
            [data-darkreader-inline-fill] {
                fill: var(--darkreader-inline-fill) !important;
            }
    
            [data-darkreader-inline-stroke] {
                stroke: var(--darkreader-inline-stroke) !important;
            }
    
            [data-darkreader-inline-outline] {
                outline-color: var(--darkreader-inline-outline) !important;
            }
    
            [data-darkreader-inline-stopcolor] {
                stop-color: var(--darkreader-inline-stopcolor) !important;
            }
        </style>
        <style class="darkreader darkreader--variables" media="screen">
            :root {
                --darkreader-neutral-background: #131516;
                --darkreader-neutral-text: #d8d4cf;
                --darkreader-selection-background: #004daa;
                --darkreader-selection-text: #e8e6e3;
            }
        </style>
        <style class="darkreader darkreader--user-agent" media="screen">
            html {
                color-scheme: dark !important;
            }
    
            input,
            textarea,
            select,
            button,
            dialog {
                background-color: #181a1b;
            }
    
            html,
            body,
            input,
            textarea,
            select,
            button {
                border-color: #736b5e;
                color: #e8e6e3;
            }
    
            a {
                color: #3391ff;
            }
    
            table {
                border-color: #545b5e;
            }
    
            ::placeholder {
                color: #b2aba1;
            }
    
            input:-webkit-autofill,
            textarea:-webkit-autofill,
            select:-webkit-autofill {
                background-color: #404400 !important;
                color: #e8e6e3 !important;
            }
    
            ::-webkit-scrollbar {
                background-color: #202324;
                color: #aba499;
            }
    
            ::-webkit-scrollbar-thumb {
                background-color: #454a4d;
            }
    
            ::-webkit-scrollbar-thumb:hover {
                background-color: #575e62;
            }
    
            ::-webkit-scrollbar-thumb:active {
                background-color: #484e51;
            }
    
            ::-webkit-scrollbar-corner {
                background-color: #181a1b;
            }
    
            * {
                scrollbar-color: #454a4d #202324;
            }
    
            ::selection {
                background-color: #004daa !important;
                color: #e8e6e3 !important;
            }
    
            ::-moz-selection {
                background-color: #004daa !important;
                color: #e8e6e3 !important;
            }
        </style>
        <style class="darkreader darkreader--fallback" media="screen"></style>
        <style class="darkreader darkreader--text" media="screen"></style>
        <style class="darkreader darkreader--invert" media="screen">
            .jfk-bubble.gtx-bubble,
            .captcheck_answer_label>input+img,
            span#closed_text>img[src^="https://www.gstatic.com/images/branding/googlelogo"],
            span[data-href^="https://www.hcaptcha.com/"]>#icon,
            #bit-notification-bar-iframe,
            ::-webkit-calendar-picker-indicator {
                filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
            }
        </style>
        <style class="darkreader darkreader--inline" media="screen">
            [data-darkreader-inline-bgcolor] {
                background-color: var(--darkreader-inline-bgcolor) !important;
            }
    
            [data-darkreader-inline-bgimage] {
                background-image: var(--darkreader-inline-bgimage) !important;
            }
    
            [data-darkreader-inline-border] {
                border-color: var(--darkreader-inline-border) !important;
            }
    
            [data-darkreader-inline-border-bottom] {
                border-bottom-color: var(--darkreader-inline-border-bottom) !important;
            }
    
            [data-darkreader-inline-border-left] {
                border-left-color: var(--darkreader-inline-border-left) !important;
            }
    
            [data-darkreader-inline-border-right] {
                border-right-color: var(--darkreader-inline-border-right) !important;
            }
    
            [data-darkreader-inline-border-top] {
                border-top-color: var(--darkreader-inline-border-top) !important;
            }
    
            [data-darkreader-inline-boxshadow] {
                box-shadow: var(--darkreader-inline-boxshadow) !important;
            }
    
            [data-darkreader-inline-color] {
                color: var(--darkreader-inline-color) !important;
            }
    
            [data-darkreader-inline-fill] {
                fill: var(--darkreader-inline-fill) !important;
            }
    
            [data-darkreader-inline-stroke] {
                stroke: var(--darkreader-inline-stroke) !important;
            }
    
            [data-darkreader-inline-outline] {
                outline-color: var(--darkreader-inline-outline) !important;
            }
    
            [data-darkreader-inline-stopcolor] {
                stop-color: var(--darkreader-inline-stopcolor) !important;
            }
        </style>
        <style class="darkreader darkreader--variables" media="screen">
            :root {
                --darkreader-neutral-background: #131516;
                --darkreader-neutral-text: #d8d4cf;
                --darkreader-selection-background: #004daa;
                --darkreader-selection-text: #e8e6e3;
            }
        </style>
        <style class="darkreader darkreader--user-agent" media="screen">
            html {
                color-scheme: dark !important;
            }
    
            input,
            textarea,
            select,
            button,
            dialog {
                background-color: #181a1b;
            }
    
            html,
            body,
            input,
            textarea,
            select,
            button {
                border-color: #736b5e;
                color: #e8e6e3;
            }
    
            a {
                color: #3391ff;
            }
    
            table {
                border-color: #545b5e;
            }
    
            ::placeholder {
                color: #b2aba1;
            }
    
            input:-webkit-autofill,
            textarea:-webkit-autofill,
            select:-webkit-autofill {
                background-color: #404400 !important;
                color: #e8e6e3 !important;
            }
    
            ::-webkit-scrollbar {
                background-color: #202324;
                color: #aba499;
            }
    
            ::-webkit-scrollbar-thumb {
                background-color: #454a4d;
            }
    
            ::-webkit-scrollbar-thumb:hover {
                background-color: #575e62;
            }
    
            ::-webkit-scrollbar-thumb:active {
                background-color: #484e51;
            }
    
            ::-webkit-scrollbar-corner {
                background-color: #181a1b;
            }
    
            * {
                scrollbar-color: #454a4d #202324;
            }
    
            ::selection {
                background-color: #004daa !important;
                color: #e8e6e3 !important;
            }
    
            ::-moz-selection {
                background-color: #004daa !important;
                color: #e8e6e3 !important;
            }
        </style>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap" rel="stylesheet">
        <!--<![endif]-->
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
        <style class="darkreader darkreader--sync" media="screen"></style>
    </head>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                    <v:fill type="tile" color="#ffffff"></v:fill>
                </v:background>
            <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-content-body" style="background-color: #ffffff; --darkreader-inline-bgcolor: #181a1b;" data-darkreader-inline-bgcolor width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20r es-p20l" style="background-color: #eaf2ff; border-radius: 20px 20px 0px 0px; --darkreader-inline-bgcolor: #1e2022;" data-darkreader-inline-bgcolor bgcolor="#eaf2ff" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p40t es-p20b" align="center">
                                                                                            <h1>${titulo}<br></h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-p10b es-p40r es-p40l" align="center">
                                                                                            <p>${mensaje}</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                            <table style="background-color: #eaf2ff; border-radius: 0px 0px 20px 20px; border-collapse: separate; --darkreader-inline-bgcolor: #1e2022;" data-darkreader-inline-bgcolor width="100%" cellspacing="0" cellpadding="0" bgcolor="#eaf2ff">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-image" style="font-size: 0px;" align="center"><a target="_blank"><img class="adapt-img" src="https://dfkibd.stripocdn.email/content/guids/CABINET_e8012d006136619c0e2e7f60984a050e/images/2208_w046_n005_288b_p1_288converted_xs6.png" alt style="display: block; border-radius: 0 0 20px 20px" width="600"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>
    `;
}

module.exports = {
    template,
}