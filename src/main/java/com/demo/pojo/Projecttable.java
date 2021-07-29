package com.demo.pojo;

public class Projecttable {
    private Integer projectid;

    private String imgsrc;

    private String name;

    private Integer person;

    private Integer waittime;

    private Integer stars;

    private Integer hot;

    private Integer synthesize;

    public Integer getProjectid() {
        return projectid;
    }

    public void setProjectid(Integer projectid) {
        this.projectid = projectid;
    }

    public String getImgsrc() {
        return imgsrc;
    }

    public void setImgsrc(String imgsrc) {
        this.imgsrc = imgsrc == null ? null : imgsrc.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getPerson() {
        return person;
    }

    public void setPerson(Integer person) {
        this.person = person;
    }

    public Integer getWaittime() {
        return waittime;
    }

    public void setWaittime(Integer waittime) {
        this.waittime = waittime;
    }

    public Integer getStars() {
        return stars;
    }

    public void setStars(Integer stars) {
        this.stars = stars;
    }

    public Integer getHot() {
        return hot;
    }

    public void setHot(Integer hot) {
        this.hot = hot;
    }

    public Integer getSynthesize() {
        return synthesize;
    }

    public void setSynthesize(Integer synthesize) {
        this.synthesize = synthesize;
    }
}