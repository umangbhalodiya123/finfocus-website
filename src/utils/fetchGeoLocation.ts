import axios from 'axios'
const ipInstance = require('what-is-my-ip-address')

// fetching IP address from third party provider
const fetchIpAddress = async (): Promise<string> => {
  const ipAddress = await ipInstance.v4()
  return ipAddress
}

// this function will be called when user doesn't allow their location permission
export const fetchIPInfo = async (): Promise<any> => {
  const ip = await fetchIpAddress()

  // calling route handler to fetch IP data
  const request = await fetch(`api/fetchIPInfo?ip=${ip}`)
  const jsonResponse = await request?.json()
  return jsonResponse
}

// this function will fetch data based on location
// this will only work if location permission is allowed from browser
export const getCountryCodeFromCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<string | null> => {
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
      params: {
        format: 'json',
        lat: latitude,
        lon: longitude,
        zoom: 5, // Adjust the zoom level as needed
      },
    })

    // Extract the country code from the response data
    if (response.data.address && response.data.address.country_code) {
      return response.data.address.country_code
    } else {
      return null // Country code not found
    }
  } catch (error) {
    console.error('Error fetching country code from coordinates:', error)
    return null
  }
}
