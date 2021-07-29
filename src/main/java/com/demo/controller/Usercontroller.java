package com.demo.controller;

import com.demo.pojo.Projecttable;
import com.demo.pojo.Usertable;
import com.demo.service.UserSetvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class Usercontroller {

    @Autowired
    UserSetvice userSetvice;



    /**
     *打开初始页面
     * author zzzfd
     * Date 2021/7/28 15:25
     */
    @RequestMapping("index")
    public String login(Model model) {
        List<Projecttable> sellist = userSetvice.sellist();
        model.addAttribute("projectlist",sellist);
        return "index";
    }

    /**
     *打开初始页面
     * author zzzfd
     * Date 2021/7/28 15:25
     */
    @RequestMapping("map")
    public String map(Model model) {
        return "map";
    }

    /**
     *登陆
     * author zzzfd
     * Date 2021/7/29 10:42
     */
    @RequestMapping("login")
    public String login(Usertable usertable, HttpSession session,Model model){
        Usertable login = userSetvice.login(usertable);
        session.setAttribute("login",login);
        List<Projecttable> sellist = userSetvice.sellist();
        model.addAttribute("projectlist",sellist);
        return "index";
    }
    /**
     *打开登陆页面
     * author zzzfd
     * Date 2021/7/29 10:46
     */
    @RequestMapping("loginshow")
    public String loginshow(){
        return "login";
    }
}
