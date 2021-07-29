package com.demo.mapper;

import com.demo.pojo.Projecttable;
import com.demo.pojo.ProjecttableExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProjecttableMapper {
    int countByExample(ProjecttableExample example);

    int deleteByExample(ProjecttableExample example);

    int deleteByPrimaryKey(Integer projectid);

    int insert(Projecttable record);

    int insertSelective(Projecttable record);

    List<Projecttable> selectByExample(ProjecttableExample example);

    Projecttable selectByPrimaryKey(Integer projectid);

    int updateByExampleSelective(@Param("record") Projecttable record, @Param("example") ProjecttableExample example);

    int updateByExample(@Param("record") Projecttable record, @Param("example") ProjecttableExample example);

    int updateByPrimaryKeySelective(Projecttable record);

    int updateByPrimaryKey(Projecttable record);
}