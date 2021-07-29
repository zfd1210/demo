package com.demo.service;

import com.demo.mapper.ProjecttableMapper;
import com.demo.mapper.UsertableMapper;
import com.demo.pojo.Projecttable;
import com.demo.pojo.Usertable;
import com.demo.pojo.UsertableExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSetvice {
    @Autowired
    ProjecttableMapper projecttableMapper;

    @Autowired
    UsertableMapper usertableMapper;

    /**
     *查询所有游乐项目
     * author zzzfd
     * Date 2021/7/29 10:39
     */
    public List<Projecttable> sellist(){
        return projecttableMapper.selectByExample(null);
    }

    /**
     *登陆
     * author zzzfd
     * Date 2021/7/29 10:40
     */
    public Usertable login(Usertable usertable){
        UsertableExample example=new UsertableExample();
        example.createCriteria().andUserphoneEqualTo(usertable.getUserphone()).andUserpasswordEqualTo(usertable.getUserpassword());
        List<Usertable> usertables = usertableMapper.selectByExample(example);
        Usertable user=usertables.get(0);
        return user;
    }
}
