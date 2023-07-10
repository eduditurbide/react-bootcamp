
require('dotenv').config({
  path: '.env.local'
})

jest.mock('./src/helpers/getEnvironments', () => ({
  getEnvironments: () => ({ ...process.env })
}))
