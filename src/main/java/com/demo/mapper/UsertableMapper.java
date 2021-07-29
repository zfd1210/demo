package com.demo.mapper;

import com.demo.pojo.Usertable;
import com.demo.pojo.UsertableExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UsertableMapper {
    int countByExample(UsertableExample example);

    int deleteByExample(UsertableExample example);

    int deleteByPrimaryKey(Integer userid);

    int insert(Usertable record);

    int insertSelective(Usertable record);

    List<Usertable> selectByExample(UsertableExample example);

    Usertable selectByPrimaryKey(Integer userid);

    int updateByExampleSelective(@Param("record") Usertable record, @Param("example") UsertableExample example);

    int updateByExample(@Param("record") Usertable record, @Param("example") UsertableExample example);

    int updateByPrimaryKeySelective(Usertable record);

    int updateByPrimaryKey(Usertable record);
}