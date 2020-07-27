import { getAssociatesByManager, getAssociatesInformation, getEvaluations } from './associate.service';
import {getBatches} from './batch.service'
import {getCategories} from './categories.service'
import {login} from './manager.service'
import {sendSWOT} from './swot.service'
import jest from '@babel/core'

jest.mock('axios')

describe('getAssociatesByManager', () => {
  it('fetches successfully data from an API', async () => {
    const associate = {
        associate:{
            name:string,
            salesforce_id:	string,
            email: string,
            batch_id: string,
            manager_id: string,
            trainers: [],
            end_date: string,
            swot: [],
            status:	string
            },
        associate:{
            name: string,
            salesforce_id: string,
            email: string,
            batch_id: string,
            manager_id:	string,
            trainers: [],
            end_date: string,
            swot: [],
            status:	string
            }
            
        };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getAssociatesByManager('julie.seals@revature.com')).resolves.toEqual(data);
    });
 
  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
        );
    await expect(getAssociatesByManager('julie.seals@revature.com')).rejects.toThrow(errorMessage);
    });
});
fetchData('react');