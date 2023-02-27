package com.xiaomi_mall.enity;

import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel("秒杀实体")
@TableName("seckill")
public class Seckill implements Serializable {

    private static final long serialVersionUID = -40356785423868312L;

    @ApiModelProperty("主键")
    private Integer seckillId;

    @ApiModelProperty("商品id")
    private Integer productId;

    @ApiModelProperty("商品价格")
    private BigDecimal seckillPrice;

    @ApiModelProperty("库存")
    private Integer stockCount;

    @ApiModelProperty("秒杀开始时间")
    private LocalDateTime start_time;

    @ApiModelProperty("秒杀结束时间")
    private LocalDateTime end_time;
}
