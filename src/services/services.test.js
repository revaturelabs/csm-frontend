import { getAssociatesByManager, getAssociatesInformation, getEvaluations } from './associate.service';
import {getBatches} from './batch.service'
import {getCategories} from './categories.service'
import {login} from './manager.service'
import {sendSWOT} from './swot.service'
import React from 'react';
import axios from 'axios'

jest.mock('axios')

describe('getAssociatesByManager', () => {
  it('fetches successfully data from an API', async () => {
    const associate = {
        associates:
        [
            {name:'Mock 1 Associate 1',userID:'mock1.associate021f85bc-035e-404e-81e8-eef036afc06a@mock.com'},{name:'Mock 0 Associate 0',userID:'mock0.associate0e313aba-0841-42b9-8337-52b736d57a5b@mock.com'},
            {name:'Mock 12 Associate 12',userID:'mock12.associateacf588f2-48ad-4716-8f44-a366f2727695@mock.com'},{name:'Mock 3 Associate 3',userID:'mock3.associateaac4df3d-35a5-43c2-9662-de1067c7ee1f@mock.com'},
            {name:'Mock 5 Associate 5',userID:'mock5.associate634561f7-851c-4ff8-9e9f-de8edb312caa@mock.com'},{name:'Mock 9 Associate 9',userID:'mock9.associate3efbcacb-1f70-4359-98ea-34aec6494bbf@mock.com'},
            {name:'Mock 6 Associate 6',userID:'mock6.associate2e49fa6b-65ba-438d-9159-f0b62d12a16b@mock.com'},{name:'Mock 11 Associate 11',userID:'mock11.associate5bdcc5b4-8390-42cc-8673-0da5bf104db8@mock.com'},
            {name:'Mock 13 Associate 13',userID:'mock13.associate088fcdd8-05d1-430d-85d1-35b4727e728e@mock.com'},{name:'Mock 7 Associate 7',userID:'mock7.associate51694e8f-55f7-4fa6-9433-01305230e916@mock.com'},
            {name:'Mock 8 Associate 8',userID:'mock8.associate29c93ef5-072d-45be-8eee-481cffa77d7b@mock.com'},{name:'Mock 2 Associate 2',userID:'mock2.associate252003db-7e02-4f08-b0f4-1cc6f4eecb65@mock.com'},
            {name:'Mock 10 Associate 10',userID:'mock10.associatef90b3076-cc2f-4a6d-9690-b58d58566981@mock.com'},{name:'Mock 4 Associate 4',userID:'mock4.associated799902a-2c06-4275-8ebf-7bff49c0a7f0@mock.com'}
        ]
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

describe('managerLogin', () => {
    it('fetches successfully data from an API', async () => {
      const manager = {
          manager:{
            _id:"emily.baillie@revature.com",
            username:"Emily",
            preferred_locations:["New York","Arlington","West Virginia"],
            batches:["TR-1651","TR-1642","TR-1649"]}
          };
  
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(login('emily.baillie@revature.com')).resolves.toEqual(data);
      });
   
    it('fetches erroneously data from an API', async () => {
      const errorMessage = 'Network Error';
   
      axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
          );
      await expect(login('emilly.baillie@revature.com')).rejects.toThrow(errorMessage);
      });
  
  });
  describe('managerLogin', () => {
    it('fetches successfully data from an API', async () => {
      const manager = {
          manager:{
            _id:"julie.seals@revature.com",
            username:"Julie",
            preferred_locations:["Reston","Tampa"],
            batches:["TR-1653","TR-1652","TR-1631"]}
          };
  
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(login('julie.seals@revature.com')).resolves.toEqual(data);
      });
   
    it('fetches erroneously data from an API', async () => {
      const errorMessage = 'Network Error';
   
      axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
          );
      await expect(login('Julie.seals@revature.com')).rejects.toThrow(errorMessage);
      });
  
  });