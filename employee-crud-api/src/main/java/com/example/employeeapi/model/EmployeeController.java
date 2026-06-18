package com.example.employeeapi.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.employeeapi.model.Employee;
import com.example.employeeapi.service.EmployeeService;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

     @Autowired
     private EmployeeService service;

     @PostMapping
     public Employee addEmployee(@RequestBody Employee employee) {
          return service.saveEmployee(employee);
     }

     @GetMapping
     public List<Employee> getAllEmployees() {
          return service.getAllEmployees();
     }

     @GetMapping("/{id}")
     public Employee getEmployee(@PathVariable int id) {
          return service.getEmployeeById(id);
     }

     @PutMapping("/{id}")
     public Employee updateEmployee(@PathVariable int id, @RequestBody Employee details) {
          Employee emp = service.getEmployeeById(id);
          if (emp != null) {
              emp.setName(details.getName());
              emp.setDepartment(details.getDepartment());
              emp.setSalary(details.getSalary());
              return service.saveEmployee(emp);
          }
          return null;
     }

     @DeleteMapping("/{id}")
     public void deleteEmployee(@PathVariable int id) {
          service.deleteEmployee(id);
     }
}