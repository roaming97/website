import type { VercelRequest, VercelResponse } from '@vercel/node'
import fetch from 'node-fetch'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req: VercelRequest, res: VercelResponse) => {
	const { body, method } = req
	const { name, email, message, token } = body

	if (method === 'POST') {
		if (!token) {
			return res.status(422).json({
				message: 'Unable to process request, please provide the required fields'
			})
		}

		console.log('Token found, attempting verification')

		try {
			const token_response = await fetch(
				`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
						'Access-Control-Allow-Origin': '*'
					},
					method: 'POST'
				}
			)

			const verify = await token_response.json()

			if (verify) {
				console.log('Verification Passed.  Attempting to send Email...')

				const HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><meta content="text/html; charset=utf-8" http-equiv="Content-Type"/><meta content="width=device-width" name="viewport"/><meta content="IE=edge" http-equiv="X-UA-Compatible"/><title></title><link href="https://fonts.googleapis.com/css?family=Verdana" rel="stylesheet" type="text/css"/><style type="text/css">body{padding: 0;}table,td,tr{vertical-align: top;border-collapse: collapse;}*{line-height: inherit;font-family:Verdana, Verdana; max-width: 100vw;}a[x-apple-data-detectors=true]{color: inherit !important;text-decoration: none !important;}</style></head><body class="clean-body" style=" padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;"><table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%"><tbody><tr style="vertical-align: top;" valign="top"><td style="word-break: break-word; vertical-align: top;" valign="top"><div style="background-color:#00548c;"><div class="block-grid" style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #cfe8ff;"><div style="border-collapse: collapse;display: table;width: 100%;background-color:#cfe8ff;"><div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;"><div class="col_cont" style="width:100% !important;"><div style="padding-top:5px; padding-bottom:5px;"><div align="center" class="img-container center autowidth"><div style="font-size:1px;line-height:15px"> </div><img align="center" alt="New Message" border="0" class="center autowidth" src="https://lats.fractal-hq.com/images/NewMessage.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 600px; display: block;" title="Burger Shop logo" width="600"/><div style="font-size:1px;line-height:20px"> </div></div><table cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%"><tr style="vertical-align: top;" valign="top"><td align="center" style="word-break: break-word; vertical-align: top; padding-left: 10px; padding-right: 10px; text-align: center; width: 100%;" valign="top" width="100%"><h1 style="color:#191919;direction:ltr;font-family: Verdana, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;"><strong>New mail from ${name}</strong></h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%"><tbody><tr style="vertical-align: top;" valign="top"><td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #EAFF4B; width: 100%;" valign="top" width="100%"><tbody><tr style="vertical-align: top;" valign="top"></tr></tbody></table></td></tr></tbody></table><div style="color:#393d47;font-family:Verdana, Helvetica Neue, Helvetica, Arial, sans-serif;letter-spacing:0px;line-height:1.5;padding-right:10px;"><div class="txtTinyMce-wrapper" style="line-height: 1.5; font-size: 12px; color: #393d47; font-family:Verdana, Helvetica Neue, Helvetica, Arial, sans-serif; letter-spacing: 0px; mso-line-height-alt: 18px;"><ul style="list-style-type: circle; background-color:#FFFFFF; padding: 30px; border-radius: 8px; margin: 0 10%"><li style="font-size: 15px; line-height: 1.5; mso-line-height-alt: 23px;"><span style="font-size: 15px;">Name:  ${name}</span></li><li style="font-size: 15px; line-height: 1.5; mso-line-height-alt: 23px;"><span style="font-size: 15px;">Email:  ${email}</span></li><li style="font-size: 15px; line-height: 1.5; mso-line-height-alt: 23px;"><span style="font-size: 15px;">Date:  ${
					new Date().toString().split(' GMT')[0]
				}</span></li></ul></div></div></div></div></div></div></div></div><div style="background-color:#00548c;"><div class="block-grid" style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #d0eaff;"><div style="border-collapse: collapse;display: table;width: 100%;background-color:#d0eaff;"><div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;"><div class="col_cont" style="width:100% !important;"><div style=" padding-top:20px; padding-bottom:5px; "><table cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%"><tr style="vertical-align: top;" valign="top"><td align="center" style="word-break: break-word; vertical-align: top; text-align: center; width: 100%;" valign="top" width="100%"><h1 style="color:#555555;direction:ltr;font-family:Verdana, Helvetica Neue, Helvetica, Arial, sans-serif;font-size:19px;font-weight:normal;letter-spacing:normal;line-height:120%;text-align:center;margin-top:10px;"><strong>Message</strong></h1></td></tr></table><div style="color:#FFFFFF;font-family:Verdana, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:0px;padding-right:30px;padding-bottom:30px;padding-left:30px;"><div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.2; font-family: Verdana, Helvetica Neue, Helvetica, Arial, sans-serif; color: #555555; mso-line-height-alt: 14px;"><p style="font-size: 14px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; background-color:#FFFFFF; padding: 30px; border-radius: 8px;"><span style="font-size: 14px;">${message}</span></p></div></div><table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%"><tbody><tr style="vertical-align: top;" valign="top"><td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 20px; padding-right: 10px; padding-bottom: 20px; padding-left: 10px;" valign="top"><table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #EAFF4D; width: 100%;" valign="top" width="100%"><tbody><tr style="vertical-align: top;" valign="top"><td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td></tr></tbody></table></td></tr></tbody></table><div style="color:#101010;font-family:Verdana, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;size:12;padding-top:10px;padding-right:10px;padding-bottom:10px;"><div class="txtTinyMce-wrapper" style="color: #101010; font-size: 12px; line-height: 1.2; font-family:Verdana, Helvetica Neue, Helvetica, Arial, sans-serif; size: 12; mso-line-height-alt: 14px;"><p style="font-size: 18px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 14px;"><a href="mailto:${email}" style="color: #33AAFF">Reply to Sender</span></p></div></div></div></div></div></div></div></div><div style="background-color:transparent;"><div class="block-grid" style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"><div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"><div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;"><div class="col_cont" style="width:100% !important;"><div style="padding-top:5px; padding-bottom:5px;"><table cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%"><tr style="vertical-align: top;" valign="top"><td align="center" style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-bottom: 5px; text-align: center;" valign="top"></div></div></div></div></div></td></tr></tbody></table></body></html>`

				const msg = {
					to: 'roaming98a@gmail.com',
					from: {
						name: 'roaming97',
						email: ''
					},
					subject: 'LATS Contact Email Recieved',
					text: 'A new message has been sent from your Contact Form',
					html: HTML
				}

				const response = await sgMail.send(msg).catch((error) => {
					console.error(error)
					if (error.response) {
						console.error(error.response.body)
						return res.status(422).json({ message: error.response.body })
					}
				})

				console.log('RESPONSE = ', response)

				return res.status(200).json({ message: 'Success!  Message sent.' })
			}

			return res.status(422).json({
				message: 'Token Verification Failed 🤖'
			})
		} catch (error) {
			console.log(error)

			return res.status(422).json({
				message: 'Something went wrong'
			})
		}
	} else return res.status(404).send('Not found')
}
