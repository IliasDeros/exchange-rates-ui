export const exchangeRatesAPI = {
  apiKey: process.env.API_KEY,
  url() {
    return `http://api.exchangeratesapi.io/v1/latest?access_key=${this.apiKey}`
  },
  async getLatest() {
    const response = await fetch(this.url())
    return response.json()
  },
  async getCurrencies() {
    const json = await this.getLatest()
    return Object.keys(json.rates)
  },
  async getCADRate(currency, value) {
    const json = await this.getLatest()
    const from = json.rates[currency]
    const to = json.rates['CAD']

    return (value * from) / to
  }
}