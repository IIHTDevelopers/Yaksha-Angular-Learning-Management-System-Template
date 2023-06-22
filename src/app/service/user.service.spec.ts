import { HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: any;
  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(), 
    };
    service = new UserService(httpClientSpy);
  });

  describe('business',()=>{     

    it('should get all users by calling getAllUsers() in service', () => {
      const res = 'some message';
      const url = 'http://127.0.0.1:8081/learningmanagement/users';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res)); 
      service.getAllUsers();
      expect(httpClientSpy.get).toBeCalledTimes(1); 
      expect(httpClientSpy.get).toHaveBeenCalledWith(url); 
    });
        
    it('should get user by calling getUser() in service', () => {
      const res = 'some message';
      const url = 'http://127.0.0.1:8081/learningmanagement/users/1';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res)); 
      service.getUser(1);
      expect(httpClientSpy.get).toBeCalledTimes(1); 
      expect(httpClientSpy.get).toHaveBeenCalledWith(url); 
    });

    it('should create user by calling createUser() in service', () => {
      const data = {
        id: 1,       
        title: 'Title',
        description: 'Description',
        instructor: 'Instructor',
        duration: 'duration',
        startDate: new Date('2022-01-01'),
        endDate:new Date('2023-01-01'),
        syllabus: 'syllabus'
       };

      const res = 'some message';
      const url = 'http://127.0.0.1:8081/learningmanagement/users';
      jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
      service.createUser(data);
      expect(httpClientSpy.post).toBeCalledTimes(1);
      expect(httpClientSpy.post).toHaveBeenCalledWith(url,data);
    });
  
    it('should update user by calling updateUser() in service', () => {
      const command1 = 1;
      const data = {
        id: 1,       
        title: 'Title',
        description: 'Description',
        instructor: 'Instructor',
        duration: 'duration',
        startDate: new Date('2022-01-01'),
        endDate:new Date('2023-01-01'),
        syllabus: 'syllabus'
       };
  
      const res = 'some message';
      const url = 'http://127.0.0.1:8081/learningmanagement/users/1';
      jest.spyOn(httpClientSpy, 'put').mockReturnValue(of(res));
      service.updateUser(data.id,data);
      expect(httpClientSpy.put).toBeCalledTimes(1);
      expect(httpClientSpy.put).toHaveBeenCalledWith(url,data);
    });
  
    it('should delete user by calling deleteUser() in service', () => {
      const command = 1;
      const res = 'some message';
      const API_URL = 'http://127.0.0.1:8081/learningmanagement/users/1';
      jest.spyOn(httpClientSpy, 'delete').mockReturnValue(of(res));
      service.deleteUser(1);
      expect(httpClientSpy.delete).toBeCalledTimes(1);
      expect(httpClientSpy.delete).toHaveBeenCalledWith(API_URL);
    });
    
    it('should search user with title by calling searchByTitle() in service', () => {
  
      const res = 'some message';
      const API_URL = 'http://127.0.0.1:8081/learningmanagement/users/search?title=title1';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
      service.searchByTitle('title1');
      expect(httpClientSpy.get).toBeCalledTimes(1);
      expect(httpClientSpy.get).toHaveBeenCalledWith(API_URL);
    });
    
    it('should search user with start date by calling searchByStartDate() in service', () => {
      const res = 'some message';
      const API_URL = 'http://127.0.0.1:8081/learningmanagement/users/search?startDate=Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)';
      jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
      service.searchByStartDate(new Date('2023-01-01'));
      expect(httpClientSpy.get).toBeCalledTimes(1);
      expect(httpClientSpy.get).toHaveBeenCalledWith(API_URL);
    });

    });  

  });
