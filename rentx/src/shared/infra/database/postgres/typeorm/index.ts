import { Connection, createConnection, getConnectionOptions } from 'typeorm'

const createDBConnection = async (
  host = 'rentx-database'
): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()

  return createConnection(Object.assign(defaultOptions, { host }))
}

export default createDBConnection
