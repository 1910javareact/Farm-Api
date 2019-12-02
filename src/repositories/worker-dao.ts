export async function daoGetAllWorkersBySalary(): Promise<Worker[]> {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const result = await client.query('SELECT * FROM dairyland.workers order by salary desc');
        return multiWorkerDTOConvertor(result.rows);
    } catch (e) {
        console.log(e);
        throw {
            status: 500,
            message: 'Internal Server Error'
        };
    } finally {
        client && client.release();
    }
}