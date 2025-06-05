import {google} from 'googleapis';

export async function getSheetsData(spreadsheetId, range) {
  let credentials;
  try {
    credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS_SAJSON);
  } catch (error) {
    console.error('Invalid credentials - Error:', error);
    throw error;
  }

  if (!credentials || !credentials.private_key || !credentials.client_email) {
    throw new Error('Missing required credential properties');
  }

  const privateKey = credentials.private_key.replace(/\\n/g, '\n');

  try{

    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({version: 'v4', auth});
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    // console.log('Response from Google Sheets:', response.data);
    return response;
  }catch(error){
    console.error('Error al obtener datos de Google Sheets:', error);
    throw error;
  }
}