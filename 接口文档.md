# 接口文档

## 目录

- [接口文档](https://www.imooc.com/wiki/you/house0202.htm#接口文档)
  - [目录](https://www.imooc.com/wiki/you/house0202.htm#目录)
  - [概述](https://www.imooc.com/wiki/you/house0202.htm#概述)
  - [接口约定](https://www.imooc.com/wiki/you/house0202.html#接口约定)
      - [接口地址](https://www.imooc.com/wiki/you/house0202.htm#接口地址)
      - [身份验证](https://www.imooc.com/wiki/you/house0202.htm#身份验证)
      - [请求](https://www.imooc.com/wiki/you/house0202.htm#请求)
      - [响应](https://www.imooc.com/wiki/you/house0202.htm#响应)
  - [令牌接口](https://www.imooc.com/wiki/you/house0202.htm#令牌接口)
      - [获取令牌](https://www.imooc.com/wiki/you/house0202.htm#获取令牌)
      - [验证令牌](https://www.imooc.com/wiki/you/house0202.htm#验证令牌)
  - [分类接口](https://www.imooc.com/wiki/you/house0202.htm#分类接口)
      - [获取分类列表](https://www.imooc.com/wiki/you/house0202.htm#获取分类列表)
  - [服务接口](https://www.imooc.com/wiki/you/house0202.htm#服务接口)
      - [查询所有已发布的服务](https://www.imooc.com/wiki/you/house0202.htm#查询所有已发布的服务)
      - [创建服务](https://www.imooc.com/wiki/you/house0202.htm#创建服务)
      - [查询我的服务](https://www.imooc.com/wiki/you/house0202.htm#查询我的服务)
      - [查询我的服务状态统计](https://www.imooc.com/wiki/you/house0202.htm#查询我的服务状态统计)
      - [查询指定id的服务](https://www.imooc.com/wiki/you/house0202.htm#查询指定id的服务)
      - [更新指定服务的状态](https://www.imooc.com/wiki/you/house0202.htm#更新指定服务的状态)
      - [编辑服务](https://www.imooc.com/wiki/you/house0202.htm#编辑服务)
  - [预约订单接口](https://www.imooc.com/wiki/you/house0202.htm#预约订单接口)
      - [查询我的订单状态统计](https://www.imooc.com/wiki/you/house0202.htm#查询我的订单状态统计)
      - [查询我的订单](https://www.imooc.com/wiki/you/house0202.htm#查询我的订单)
      - [提交预约订单](https://www.imooc.com/wiki/you/house0202.htm#提交预约订单)
      - [更新指定 id 订单的状态](https://www.imooc.com/wiki/you/house0202.htm#更新指定-id-订单的状态)
      - [查询指定 id 的订单](https://www.imooc.com/wiki/you/house0202.htm#查询指定-id-的订单)
  - [退款订单接口](https://www.imooc.com/wiki/you/house0202.htm#退款订单接口)
      - [提交退款申请](https://www.imooc.com/wiki/you/house0202.htm#提交退款申请)
      - [根据角色、状态查询我的退款订单](https://www.imooc.com/wiki/you/house0202.htm#根据角色状态查询我的退款订单)
      - [根据角色查询我处理中的退款订单](https://www.imooc.com/wiki/you/house0202.htm#根据角色查询我处理中的退款订单)
      - [更新指定 id 的退款订单状态](https://www.imooc.com/wiki/you/house0202.htm#更新指定-id-的退款订单状态)
      - [查询指定 id 的退款订单](https://www.imooc.com/wiki/you/house0202.htm#查询指定-id-的退款订单)
  - [服务评价接口](https://www.imooc.com/wiki/you/house0202.htm#服务评价接口)
      - [创建评价](https://www.imooc.com/wiki/you/house0202.htm#创建评价)
      - [根据订单 id 查询评价](https://www.imooc.com/wiki/you/house0202.htm#根据订单-id-查询评价)
      - [根据服务 id 查询评价列表](https://www.imooc.com/wiki/you/house0202.htm#根据服务-id-查询评价列表)
  - [用户接口](https://www.imooc.com/wiki/you/house0202.htm#用户接口)
      - [查询当前用户信息](https://www.imooc.com/wiki/you/house0202.htm#查询当前用户信息)
      - [更新当前用户信息](https://www.imooc.com/wiki/you/house0202.htm#更新当前用户信息)
      - [获取当前用户的TIM登陆凭证](https://www.imooc.com/wiki/you/house0202.htm#获取当前用户的tim登陆凭证)
  - [文件上传接口](https://www.imooc.com/wiki/you/house0202.htm#文件上传接口)
  - [附录](https://www.imooc.com/wiki/you/house0202.htm#附录)
    - [错误码](https://www.imooc.com/wiki/you/house0202.htm#错误码)
    - [枚举字典](https://www.imooc.com/wiki/you/house0202.htm#枚举字典)
      - [服务类型枚举](https://www.imooc.com/wiki/you/house0202.htm#服务类型枚举)
      - [角色类型枚举](https://www.imooc.com/wiki/you/house0202.htm#角色类型枚举)
      - [服务状态枚举](https://www.imooc.com/wiki/you/house0202.htm#服务状态枚举)
      - [服务操作枚举](https://www.imooc.com/wiki/you/house0202.htm#服务操作枚举)
      - [预约订单状态枚举](https://www.imooc.com/wiki/you/house0202.htm#预约订单状态枚举)
      - [预约订单操作枚举](https://www.imooc.com/wiki/you/house0202.htm#预约订单操作枚举)
      - [退款订单状态枚举](https://www.imooc.com/wiki/you/house0202.htm#退款订单状态枚举)
      - [退款订单操作枚举](https://www.imooc.com/wiki/you/house0202.htm#退款订单操作枚举)
      - [评价状态枚举](https://www.imooc.com/wiki/you/house0202.htm#评价状态枚举)

## 概述

本接口文档用于说明慕课网微信小程序课程——《理论+实践扫盲，小程序开发之《慕慕到家》家政项目实战》课程的服务端接口。  

课程内容、接口响应数据仅为课程学员提供演示练习使用，非真实有效。  

## 接口约定

#### 接口地址

基础 URL：`https://qinchenju.com/homemaking/`  

> 请根据实际所调用的接口拼接完整接口地址。如`获取令牌`接口的地址是`v1/token`，那么完整的调用地址就是`https://qinchenju.com/homemaking/v1/token`。

#### 身份验证

除`获取令牌`、`令牌校验`、`获取分类列表`、`获取服务列表`、`文件上传`接口以外，其余接口在请求时均需在HTTP Headers 中添加`token`字段，字段的值为`获取令牌`接口成功调用后返回的令牌信息。  

> `token` 是通过课程验证码和订单号通过调用令牌接口获得，验证码和订单号是课程学员的唯一标识。验证码和令牌存在有效期，需要定期重新获取。请勿共享、泄露课程验证码和订单号，防止被他人盗用导致`封号`处理！！！！

#### 请求

1. 请求类型
本课程 API 设计遵循`RESTfull`风格设计，HTTP请求类型包含`GET`、`POST`、`PUT`。开发者需按本文档中各接口要求的请求类型调用相应的接口地址。

> 微信小程序不支持`PATCH` HTTP 请求类型。

2. 请求格式

*  Content-Type: application/json;charset=utf-8

> 文件上传接口除外

#### 响应

本接口的响应格式主要分为成功、失败两种。开发者可以根据响应格式进行统一异常捕获和信息返回处理。

1. 请求成功  

HTTP 状态码：

* 200 （请求成功）
* 201 （创建成功）

```json
// 200
{
    "error_code": 0,
    "data": null,
    "message": "ok"
}
```

字段解释：

序号|字段名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|error_code|integer|是|错误码，请求成功时为 0
2|data|any|否|接口返回给调用方的数据，无数据时返回空数组
3|message|string|是|消息文本，成功时返回：ok

1. 请求失败  
   
HTTP 状态码：   
* 400（参数校验异常、操作类异常）  
* 401（令牌异常）  
* 403（权限异常）
* 404（访问的地址或资源不存在） 
* 500（服务器异常）

``` json
// 401
{
    "error_code": 10002,
    "message": "token令牌无效或已过期",
    "request": "PUT  /v1/user"
}
```

字段解释：

序号|字段名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|error_code|integer|是|错误码，请求失败时的错误码，错误码清单详见附录章节
2|message|string|是| 具体错误描述信息
3|request|string|是| 本次请求的类型及接口地址

## 令牌接口

#### 获取令牌

请求类型：`POST`
请求地址：`v1/token`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|i_code|string|是|慕课网课程验证码，在课程目录页面查看
  2|order_no|integer|是|课程订单号，在课程目录页面查看
  

请求结果示例：
```json
{
    "error_code": 0,
    "data": {
        "token": "ff8b66355a5f460d4ce9524e0fbabe0f"
    },
    "message": "ok"
}
```
字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|token|string|是|服务端生成的令牌内容

#### 验证令牌

请求类型：`POST`
请求地址：`v1/token/verify`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|token|string|是|`获取令牌`接口返回的令牌内容
  
请求结果示例：
```json
{
    "error_code": 0,
    "data": {
        "valid": true
    },
    "message": "ok"
}
```
字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|valid|bool|是|验证结果：true，验证通过；false，验证不通过

## 分类接口

#### 获取分类列表

请求类型：`GET`
请求地址：`v1/category`
请求参数：
序号|参数名|类型|是否必传|描述
  ---- | --- | --- | --- | ---
  1|无|无|否|无
  
请求结果示例：
```json
{
    "error_code": 0,
    "data": [
        {
            "id": 1,
            "name": "保洁"
        },
        {
            "id": 2,
            "name": "汽修"
        },
        {
            "id": 3,
            "name": "疏通"
        },
        {
            "id": 4,
            "name": "在线教育"
        },
        {
            "id": 5,
            "name": "宠物"
        },
        {
            "id": 6,
            "name": "护理"
        },
        {
            "id": 7,
            "name": "婚恋"
        }
    ],
    "message": "ok"
}
```
字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|分类所属 id
2|name|string|是|分类名称

## 服务接口

#### 查询所有已发布的服务

请求类型：`GET`
请求地址：`v1/service/list`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|category_id|integer|否|可空，分类 id；指定后可查询指定分类的服务
  2|type|integer|否|可空，服务类型：1、在提供；2、正在找；指定后可查询指定类型的服务
  3|page|integer|是|分页页码，指定从几页开始查询，起始页为 1
  4|count|integer|是|分页内容条数，指定一页查询多少条数据，至少为 1

请求结果示例：
```json
{
    "error_code": 0,
    "data": {
        "total": 1,
        "per_page": 10,
        "current_page": 1,
        "last_page": 1,
        "data": [
            {
                "id": 1,
                "type": 1,
                "designated_place": 1,
                "title": "节假日宠物寄养",
                "description": "五一劳动节三天假期宠物寄养服务，代溜（一天之少一次），代喂食，狗粮需自备。",
                "price": "300.00",
                "score": "3.5",
                "sales_volume": 3,
                "create_time": "2021-03-07 14:32:20",
                "publisher": {
                    "id": 4,
                    "nickname": "沁塵",
                    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
                    "real_name": null,
                    "gender": 1,
                    "tel": null
                },
                "category": {
                    "id": 5,
                    "name": "宠物"
                },
                "cover_image": {
                    "id": 1,
                    "path": "http://qinchenju.com/homemaking/storage/20210307/45c172ec5263f9a742908ca4143d667a.jpg"
                }
            }
        ]
    },
    "message": "ok"
}
```
字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|total|integer|是|查询结果的总记录数
2|per_page|integer|是|查询记录数
3|current_page|integer|是|当前页码
4|last_page|integer|是|最大页码
5|data|any|是|分页内容  

分页内容字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|score|string|是|服务的历史平均评分
8|sales_volume|integer|是| 历史销量
9|create_time|datetime|是|服务创建时间
10|publisher|object|是|服务发布者个人信息
11|category|object|是|所属分类信息。id：分类 id，name：分类名称
12|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 创建服务

请求类型：`POST`  
请求地址：`v1/service`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|type|integer|是|服务所属类型。1、在提供；2、正在找 
  2|title|string|是|服务标题
  3|category_id|integer|是|服务所属分类的 id
  4|cover_image_id|integer|是|封面图 id
  5|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
  6|description|string|是|服务详情描述
  7|begin_date|string|是|服务有效期开始时间。格式：2021-01-01
  8|end_date|string|是|服务有效期结束时间。格式：2021-01-01
  9|price|string|是|服务价格。最多两位小数
  
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "service_id": "9"
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|service_id|integer|是|创建成功后返回的服务 id



#### 查询我的服务

请求类型：`GET`
请求地址：`v1/service/my`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|type|integer|是|服务类型：1、在提供；2、正在找
  2|status|integer|否|可空，服务状态。不传则查询所有状态的服务；服务状态的枚举详见附录章节
  3|page|integer|是|分页页码，指定从几页开始查询，起始页为 1
  4|count|integer|是|分页内容条数，指定一页查询多少条数据，至少为 1

请求结果示例：
```json
{
  // HTTP status 200
    "error_code": 0,
    "data": {
        "total": 1,
        "per_page": 10,
        "current_page": 1,
        "last_page": 1,
        "data": [
            {
                "id": 9,
                "type": 1,
                "designated_place": 0,
                "title": "陪笑服务",
                "description": "哈哈哈哈哈哈哈哈哈哈哈",
                "price": "666.00",
                "begin_date": "2021-01-29",
                "end_date": "2021-01-29",
                "score": "0",
                "sales_volume": 0,
                "status": 0,
                "create_time": "2021-03-09 16:07:30",
                "publisher": {
                    "id": 8,
                    "nickname": "慕慕1617",
                    "avatar": "http://course.chanmeifei.cn/imooc/logo.png",
                    "real_name": null,
                    "gender": 0,
                    "tel": null
                },
                "category": {
                    "id": 1,
                    "name": "保洁"
                },
                "cover_image": {
                    "id": 1,
                    "path": "http://qinchenju.com/homemaking/storage/20210307/45c172ec5263f9a742908ca4143d667a.jpg"
                }
            }
        ]
    },
    "message": "ok"
}
```
字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|total|integer|是|查询结果的总记录数
2|per_page|integer|是|查询记录数
3|current_page|integer|是|当前页码
4|last_page|integer|是|最大页码
5|data|any|是|分页内容  

分页内容字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
9|create_time|datetime|是|服务创建时间
10|publisher|object|是|服务发布者个人信息
11|category|object|是|所属分类信息。id：分类 id，name：分类名称
12|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 查询我的服务状态统计

请求类型：`GET`  
请求地址：`v1/service/count`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|type|integer|是|服务类型：1、在提供；2、正在找

请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "pending": 1,
        "unpublished": 0,
        "published": 0,
        "off_shelves": 0
    },
    "message": "ok"
}
```

字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|pending|integer|是|待审核服务数量
2|unpublished|integer|是|未发布服务数量
3|published|integer|是|已发布服务数量
4|off_shelves|integer|是|已下架服务数量

#### 查询指定id的服务

请求类型：`GET`
请求地址：`v1/service/{id}`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|无|无|否|无

请求结果示例：
```json
{
    "error_code": 0,
    "data": {
        "id": 9,
        "type": 1,
        "designated_place": 0,
        "title": "陪笑服务",
        "description": "哈哈哈哈哈哈哈哈哈哈哈",
        "price": "666.00",
        "begin_date": "2021-01-29",
        "end_date": "2021-01-29",
        "score": "0",
        "sales_volume": 0,
        "status": 0,
        "create_time": "2021-03-09 16:07:30",
        "publisher": {
            "id": 8,
            "nickname": "慕慕1617",
            "avatar": "http://course.chanmeifei.cn/imooc/logo.png",
            "real_name": null,
            "gender": 0,
            "tel": null
        },
        "category": {
            "id": 1,
            "name": "保洁"
        },
        "cover_image": {
            "id": 1,
            "path": "http://qinchenju.com/homemaking/storage/20210307/45c172ec5263f9a742908ca4143d667a.jpg"
        }
    },
    "message": "ok"
}
```
字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
12|create_time|datetime|是|服务创建时间
13|publisher|object|是|服务发布者个人信息
14|category|object|是|所属分类信息。id：分类 id，name：分类名称
15|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 更新指定服务的状态

请求类型：`POST`
请求地址：`v1/service/{id}`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|action|integer|是|服务操作类型。服务操作枚举详见附录章节

请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "result": true
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|result|bool|是|更新成功标识

#### 编辑服务

请求类型：`PUT`  
请求地址：`v1/service/{id}`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|type|integer|是|服务所属类型。1、在提供；2、正在找 
  2|title|string|是|服务标题
  3|category_id|integer|是|服务所属分类的 id
  4|cover_image_id|integer|是|封面图 id
  5|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
  6|description|string|是|服务详情描述
  7|begin_date|string|是|服务有效期开始时间。格式：2021-01-01
  8|end_date|string|是|服务有效期结束时间。格式：2021-01-01
  9|price|string|是|服务价格。最多两位小数
  
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "id": 9,
        "type": 1,
        "designated_place": 0,
        "title": "陪笑服务Plus",
        "description": "哈哈哈哈哈哈哈哈哈哈哈",
        "price": "666.00",
        "begin_date": "2021-01-29",
        "end_date": "2021-01-29",
        "score": "0",
        "sales_volume": 0,
        "status": 0,
        "create_time": "2021-03-09 16:07:30",
        "publisher": {
            "id": 8,
            "nickname": "慕慕1617",
            "avatar": "http://course.chanmeifei.cn/imooc/logo.png",
            "real_name": null,
            "gender": 0,
            "tel": null
        },
        "category": {
            "id": 1,
            "name": "保洁"
        },
        "cover_image": {
            "id": 1,
            "path": "http://qinchenju.com/homemaking/storage/20210307/45c172ec5263f9a742908ca4143d667a.jpg"
        }
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
9|create_time|datetime|是|服务创建时间
10|publisher|object|是|服务发布者个人信息
11|category|object|是|所属分类信息。id：分类 id，name：分类名称
12|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url


## 预约订单接口

#### 查询我的订单状态统计

请求类型：`GET`  
请求地址：`v1/order/count`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|role|integer|是|角色类型。1：发布者；2：消费者

请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "unapproved": 0,
        "unpaid": 0,
        "unconfirmed": 1,
        "unrated": 0
    },
    "message": "ok"
}
```

字段解释：  

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|unapproved|integer|是|待同意订单数量
2|unpaid|integer|是|待支付订单数量
3|unconfirmed|integer|是|待确认订单数量
4|unrated|integer|是|待评价订单数量

#### 查询我的订单

请求类型：`GET`
请求地址：`v1/order/my`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|role|integer|是|角色类型。1：发布者；2：消费者
  2|status|integer|否|可空，服务状态。不传则查询所有状态的服务；服务状态的枚举详见附录章节
  3|page|integer|是|分页页码，指定从几页开始查询，起始页为 1
  4|count|integer|是|分页内容条数，指定一页查询多少条数据，至少为 1

请求结果示例：
```json
{
    "error_code": 0,
    "data": {
        "total": 2,
        "per_page": 10,
        "current_page": 1,
        "last_page": 1,
        "data": [
            {
                "id": 5,
                "order_no": 2021030800000225,
                "price": "20000.00",
                "service_snap": {
                    "id": 6,
                    "type": 1,
                    "price": "20000.00",
                    "score": "0",
                    "title": "Java 入门到进阶",
                    "status": 2,
                    "category": {
                        "id": 4,
                        "name": "在线教育"
                    },
                    "end_date": "2021-03-08",
                    "publisher": {
                        "id": 1,
                        "tel": null,
                        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
                        "gender": 1,
                        "nickname": "沁塵",
                        "real_name": "沁塵"
                    },
                    "begin_date": "2021-03-07",
                    "cover_image": {
                        "id": 8,
                        "path": "http://qinchenju.com/homemaking/storage/20210307/28a9a41987237a118ea54dfc7412a47c.jpg"
                    },
                    "create_time": "2021-03-07 20:58:30",
                    "description": "Java 入门到进阶，包教包会，一个月时间。对标阿里 P10",
                    "sales_volume": 0,
                    "designated_place": 1
                },
                "address_snap": {
                    "errMsg": "chooseAddress:ok",
                    "cityName": "广州市",
                    "userName": "黄老师",
                    "telNumber": "10086",
                    "countyName": "海珠区",
                    "detailInfo": "慕有家",
                    "postalCode": "510220",
                    "nationalCode": "440105",
                    "provinceName": "广东省"
                },
                "status": 2,
                "create_time": "2021-03-08 20:50:26",
                "publisher": {
                    "id": 1,
                    "nickname": "沁塵",
                    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
                    "real_name": "沁塵",
                    "gender": 1,
                    "tel": null
                },
                "consumer": {
                    "id": 4,
                    "nickname": "沁塵",
                    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
                    "real_name": null,
                    "gender": 1,
                    "tel": null
                }
            },
        ]
    },
    "message": "ok"
}
```
字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|total|integer|是|查询结果的总记录数
2|per_page|integer|是|查询记录数
3|current_page|integer|是|当前页码
4|last_page|integer|是|最大页码
5|data|any|是|分页内容  

分页内容字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|订单 id
2|order_no|integer|是|订单号
3|price|string|是|订单金额，保留两位小数
4|service_snap|object|是|下单时的服务快照信息
5|address_snap|object|否|下单时提交的地址信息，可空。字段解释参见：[wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
6|status|integer|是|订单状态。订单状态枚举详见附录章节
7|create_time|string|是|订单创建时间
8|publisher|object|是|服务发布者个人信息
9|consumer|object|是|服务消费者个人信息

service_snap字段解释：  

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
12|create_time|datetime|是|服务创建时间
13|publisher|object|是|服务发布者个人信息
14|category|object|是|所属分类信息。id：分类 id，name：分类名称
15|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher、consumer字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码


#### 提交预约订单

请求类型：`POST`  
请求地址：`v1/order`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|service_id|integer|是|要预约的服务 id
  2|address|string|否|小程序wx.chooseAddress()返回的地址信息；目标服务的 `designated_place`字段为 0 时可不传
  
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "order_id": 10
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|order_id|integer|是|创建成功后返回的预约订单 id

#### 更新指定 id 订单的状态

请求类型：`POST`
请求地址：`v1/order/{id}`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|action|integer|是|订单操作类型。订单操作枚举详见附录章节

请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "result": true
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|result|bool|是|更新成功标识

#### 查询指定 id 的订单

请求类型：`GET`
请求地址：`v1/order/{id}`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|无|无|否|无

请求结果示例：

```json
{
  // HTTP status 201
    "error_code": 0,
    "data": {
        "id": 6,
        "order_no": 2021030800000228,
        "price": "300.00",
        "service_snap": {
            "id": 1,
            "type": 1,
            "price": "300.00",
            "score": "5",
            "title": "节假日宠物寄养",
            "status": 2,
            "category": {
                "id": 5,
                "name": "宠物"
            },
            "end_date": "2021-03-15",
            "publisher": {
                "id": 4,
                "tel": null,
                "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
                "gender": 1,
                "nickname": "沁塵",
                "real_name": null
            },
            "begin_date": "2021-03-07",
            "cover_image": {
                "id": 1,
                "path": "http://qinchenju.com/homemaking/storage/20210307/45c172ec5263f9a742908ca4143d667a.jpg"
            },
            "create_time": "2021-03-07 14:32:20",
            "description": "五一劳动节三天假期宠物寄养服务，代溜（一天之少一次），代喂食，狗粮需自备。",
            "sales_volume": 1,
            "designated_place": 1
        },
        "address_snap": {
            "errMsg": "chooseAddress:ok",
            "cityName": "广州市",
            "userName": "张三",
            "telNumber": "020-81167888",
            "countyName": "海珠区",
            "detailInfo": "新港中路397号",
            "postalCode": "510000",
            "nationalCode": "510000",
            "provinceName": "广东省"
        },
        "status": 2,
        "create_time": "2021-03-08 20:51:32",
        "publisher": {
            "id": 4,
            "nickname": "沁塵",
            "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
            "real_name": null,
            "gender": 1,
            "tel": null
        },
        "consumer": {
            "id": 1,
            "nickname": "沁塵",
            "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
            "real_name": "沁塵",
            "gender": 1,
            "tel": null
        }
    },
    "message": "ok"
}
```

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|订单 id
2|order_no|integer|是|订单号
3|price|string|是|订单金额，保留两位小数
4|service_snap|object|是|下单时的服务快照信息
5|address_snap|object|否|下单时提交的地址信息.字段解释参见：[wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
6|status|integer|是|订单状态。订单状态枚举详见附录章节
7|create_time|string|是|订单创建时间
8|publisher|object|是|服务发布者个人信息
9|consumer|object|是|服务消费者个人信息

service_snap字段解释：  

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
12|create_time|datetime|是|服务创建时间
13|publisher|object|是|服务发布者个人信息
14|category|object|是|所属分类信息。id：分类 id，name：分类名称
15|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher、consumer字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

## 退款订单接口

#### 提交退款申请

请求类型：`POST`  
请求地址：`v1/refund`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|order_id|integer|是| 要申请退款的预约订单id
  2|reason|string|是|申请理由
  3|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
  
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "order_no": 2021030900000272,
        "reason": "就是想退款，很不爽。说好的代打，段位更低了。啥玩意。",
        "illustration": [],
        "id": "2"
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|提交成功后返回的退款订单 id
2|order_no|string|是|退款订单号
3|reason|string|是|申请理由
4|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。

#### 根据角色、状态查询我的退款订单

请求类型：`GET`
请求地址：`v1/refund`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|role|integer|是|角色类型。1：发布者；2：消费者
  2|status|integer|否|可空，退款订单状态。不传则查询所有状态的退款订单；退款订单状态的枚举详见附录章节
  3|page|integer|是|分页页码，指定从几页开始查询，起始页为 1
  4|count|integer|是|分页内容条数，指定一页查询多少条数据，至少为 1

请求结果示例：

```json
{
  // HTTP status 201
    "error_code": 0,
    "data": {
        "total": 1,
        "per_page": 10,
        "current_page": 1,
        "last_page": 1,
        "data": [
            {
                "id": 5,
                "order_no": 2021030900000302,
                "reason": "明敏明明明明明哦明明民工你你哦匿名明明哟哟哟",
                "illustration": [],
                "status": 1,
                "create_time": "2021-03-09 23:25:43",
                "service_order": {
                    "id": 11,
                    "order_no": 2021030900000292,
                    "price": "20000.00",
                    "service_snap": {
                        "id": 4,
                        "type": 1,
                        "price": "20000.00",
                        "score": "0",
                        "title": "PHP 入门到进阶",
                        "status": 2,
                        "category": {
                            "id": 4,
                            "name": "在线教育"
                        },
                        "end_date": "2021-03-09",
                        "publisher": {
                            "id": 1,
                            "tel": null,
                            "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
                            "gender": 1,
                            "nickname": "沁塵",
                            "real_name": "沁塵"
                        },
                        "begin_date": "2021-03-07",
                        "cover_image": {
                            "id": 6,
                            "path": "http://qinchenju.com/homemaking/storage/20210307/8e7e78ee26f19461669acecc6c08d4bd.jpg"
                        },
                        "create_time": "2021-03-07 20:41:12",
                        "description": "PHP 入门到进阶，包教包会，一个月时间。",
                        "sales_volume": 0,
                        "designated_place": 1
                    },
                    "address_snap": {
                        "errMsg": "chooseAddress:ok",
                        "cityName": "广州市",
                        "userName": "沁塵",
                        "telNumber": "18888888888",
                        "countyName": "海珠区",
                        "detailInfo": "慕有家",
                        "postalCode": "510220",
                        "nationalCode": "440105",
                        "provinceName": "广东省"
                    },
                    "status": 4,
                    "create_time": "2021-03-09 23:24:51",
                    "publisher": {
                        "id": 1,
                        "nickname": "沁塵",
                        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
                        "real_name": "沁塵",
                        "gender": 1,
                        "tel": null
                    },
                    "consumer": {
                        "id": 4,
                        "nickname": "沁塵",
                        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
                        "real_name": null,
                        "gender": 1,
                        "tel": null
                    }
                }
            }
        ]
    },
    "message": "ok"
}
```

字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|total|integer|是|查询结果的总记录数
2|per_page|integer|是|查询记录数
3|current_page|integer|是|当前页码
4|last_page|integer|是|最大页码
5|data|any|是|分页内容  

分页内容字段解释：

序号|参数名|类型|必填|描述
---- | --- | --- | --- | ---
1|id|integer|是|提交成功后返回的退款订单 id
2|order_no|string|是|退款订单号
3|reason|string|是|申请理由
4|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
5|status|integer|是|退款订单状态。退款订单状态枚举详见附录章节
6|create_time|string|是|退款订单创建时间
7|service_order|object|是|退款订单关联的预约订单信息

service_order 字段解释:

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|订单 id
2|order_no|integer|是|订单号
3|price|string|是|订单金额，保留两位小数
4|service_snap|object|是|下单时的服务快照信息
5|address_snap|object|否|下单时提交的地址信息.字段解释参见：[wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
6|status|integer|是|订单状态。订单状态枚举详见附录章节
7|create_time|string|是|订单创建时间
8|publisher|object|是|服务发布者个人信息
9|consumer|object|是|服务消费者个人信息

service_snap字段解释：  

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
12|create_time|datetime|是|服务创建时间
13|publisher|object|是|服务发布者个人信息
14|category|object|是|所属分类信息。id：分类 id，name：分类名称
15|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher、consumer字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 根据角色查询我处理中的退款订单

请求类型：`GET`
请求地址：`v1/refund/process`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|role|integer|是|角色类型。1：发布者；2：消费者
  2|page|integer|是|分页页码，指定从几页开始查询，起始页为 1
  3|count|integer|是|分页内容条数，指定一页查询多少条数据，至少为 1

请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "total": 1,
        "per_page": 10,
        "current_page": 1,
        "last_page": 1,
        "data": [
            {
                "id": 5,
                "order_no": 2021030900000302,
                "reason": "明敏明明明明明哦明明民工你你哦匿名明明哟哟哟",
                "illustration": [],
                "status": 1,
                "create_time": "2021-03-09 23:25:43",
                "service_order": {
                    "id": 11,
                    "order_no": 2021030900000292,
                    "price": "20000.00",
                    "service_snap": {
                        "id": 4,
                        "type": 1,
                        "price": "20000.00",
                        "score": "0",
                        "title": "PHP 入门到进阶",
                        "status": 2,
                        "category": {
                            "id": 4,
                            "name": "在线教育"
                        },
                        "end_date": "2021-03-09",
                        "publisher": {
                            "id": 1,
                            "tel": null,
                            "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
                            "gender": 1,
                            "nickname": "沁塵",
                            "real_name": "沁塵"
                        },
                        "begin_date": "2021-03-07",
                        "cover_image": {
                            "id": 6,
                            "path": "http://qinchenju.com/homemaking/storage/20210307/8e7e78ee26f19461669acecc6c08d4bd.jpg"
                        },
                        "create_time": "2021-03-07 20:41:12",
                        "description": "PHP 入门到进阶，包教包会，一个月时间。",
                        "sales_volume": 0,
                        "designated_place": 1
                    },
                    "address_snap": {
                        "errMsg": "chooseAddress:ok",
                        "cityName": "广州市",
                        "userName": "沁塵",
                        "telNumber": "18888888888",
                        "countyName": "海珠区",
                        "detailInfo": "慕有家",
                        "postalCode": "510220",
                        "nationalCode": "440105",
                        "provinceName": "广东省"
                    },
                    "status": 4,
                    "create_time": "2021-03-09 23:24:51",
                    "publisher": {
                        "id": 1,
                        "nickname": "沁塵",
                        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
                        "real_name": "沁塵",
                        "gender": 1,
                        "tel": null
                    },
                    "consumer": {
                        "id": 4,
                        "nickname": "沁塵",
                        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
                        "real_name": null,
                        "gender": 1,
                        "tel": null
                    }
                }
            }
        ]
    },
    "message": "ok"
}
```

字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|total|integer|是|查询结果的总记录数
2|per_page|integer|是|查询记录数
3|current_page|integer|是|当前页码
4|last_page|integer|是|最大页码
5|data|any|是|分页内容  

分页内容字段解释：

序号|参数名|类型|必填|描述
---- | --- | --- | --- | ---
1|id|integer|是|提交成功后返回的退款订单 id
2|order_no|string|是|退款订单号
3|reason|string|是|申请理由
4|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
5|status|integer|是|退款订单状态。退款订单状态枚举详见附录章节
6|create_time|string|是|退款订单创建时间
7|service_order|object|是|退款订单关联的预约订单信息

service_order 字段解释:

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|订单 id
2|order_no|integer|是|订单号
3|price|string|是|订单金额，保留两位小数
4|service_snap|object|是|下单时的服务快照信息
5|address_snap|object|否|下单时提交的地址信息.字段解释参见：[wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
6|status|integer|是|订单状态。订单状态枚举详见附录章节
7|create_time|string|是|订单创建时间
8|publisher|object|是|服务发布者个人信息
9|consumer|object|是|服务消费者个人信息

service_snap字段解释：  

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
12|create_time|datetime|是|服务创建时间
13|publisher|object|是|服务发布者个人信息
14|category|object|是|所属分类信息。id：分类 id，name：分类名称
15|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher、consumer字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 更新指定 id 的退款订单状态

请求类型：`POST`
请求地址：`v1/refund/{id}`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|action|integer|是|退款订单操作类型。退款订单操作枚举详见附录章节

请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "result": true
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|result|bool|是|更新成功标识

#### 查询指定 id 的退款订单

请求类型：`GET`
请求地址：`v1/refund/{id}`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|无|无|否|无
请求结果示例：
```json
{
    "id": 1,
    "order_no": 2021030800000238,
    "reason": "阿三大叔大叔大叔大所大所多撒大声地阿斯达四大",
    "images": [],
    "status": 1,
    "create_time": "2021-03-08 22:45:57",
    "publisher": {
        "id": 4,
        "nickname": "沁塵",
        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
        "real_name": null,
        "gender": 1,
        "tel": null
    },
    "consumer": {
        "id": 1,
        "nickname": "沁塵",
        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
        "real_name": "沁塵",
        "gender": 1,
        "tel": null
    },
    "service_order": {
        "id": 6,
        "order_no": 2021030800000228,
        "price": "300.00",
        "service_snap": {
            "id": 1,
            "type": 1,
            "price": "300.00",
            "score": "5",
            "title": "节假日宠物寄养",
            "status": 2,
            "category": {
                "id": 5,
                "name": "宠物"
            },
            "end_date": "2021-03-15",
            "publisher": {
                "id": 4,
                "tel": null,
                "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/77Dr13EtDbXyBcuvvJ1BNQZtXtlGr7wrtY03NPVhGSqSuoJ65XBx9dY48Q0XBLMZIxH13JLtdUiaic3t8WGqo43A/132",
                "gender": 1,
                "nickname": "沁塵",
                "real_name": null
            },
            "begin_date": "2021-03-07",
            "cover_image": {
                "id": 1,
                "path": "http://qinchenju.com/homemaking/storage/20210307/45c172ec5263f9a742908ca4143d667a.jpg"
            },
            "create_time": "2021-03-07 14:32:20",
            "description": "五一劳动节三天假期宠物寄养服务，代溜（一天之少一次），代喂食，狗粮需自备。",
            "sales_volume": 1,
            "designated_place": 1
        },
        "address_snap": {
            "errMsg": "chooseAddress:ok",
            "cityName": "广州市",
            "userName": "张三",
            "telNumber": "020-81167888",
            "countyName": "海珠区",
            "detailInfo": "新港中路397号",
            "postalCode": "510000",
            "nationalCode": "510000",
            "provinceName": "广东省"
        },
        "status": 4,
        "create_time": "2021-03-08 20:51:32"
}
```
字段解释：

序号|参数名|类型|必填|描述
---- | --- | --- | --- | ---
1|id|integer|是|提交成功后返回的退款订单 id
2|order_no|string|是|退款订单号
3|reason|string|是|申请理由
4|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
5|status|integer|是|退款订单状态。退款订单状态枚举详见附录章节
6|create_time|string|是|退款订单创建时间
7|service_order|object|是|退款订单关联的预约订单信息

service_order 字段解释:

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|否|订单 id
2|order_no|integer|否|订单号
3|price|string|否|订单金额，保留两位小数
4|service_snap|object|否|下单时的服务快照信息
5|address_snap|object|是|下单时提交的地址信息.字段解释参见：[wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
6|status|integer|否|订单状态。订单状态枚举详见附录章节
7|create_time|string|否|订单创建时间
8|publisher|object|否|服务发布者个人信息
9|consumer|object|否|服务消费者个人信息

service_snap字段解释：  

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|服务 id
2|type|integer|是|服务所属类型。1：在提供；2：正在找
3|designated_place|integer|是|是否要求预约人指定服务地点，1：是；0：否
4|title|string|是|服务标题
5|description|string|是|服务详情描述
6|price|string|是|服务价格
7|begin_date|string|是|服务有效期开始时间
8|end_date|string|是|服务有效期结束时间
9|score|string|是|服务的历史平均评分
10|sales_volume|integer|是| 历史销量
11|status|integer|是|服务状态。服务状态的枚举详见附录章节
12|create_time|datetime|是|服务创建时间
13|publisher|object|是|服务发布者个人信息
14|category|object|是|所属分类信息。id：分类 id，name：分类名称
15|cover_image|object|是|服务封面图信息。id：图片 id，path：图片url

publisher、consumer字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

## 服务评价接口

#### 创建评价

请求类型：`POST`  
请求地址：`v1/rating`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|order_id|integer|是| 评价目标订单的订单id
  2|score|integer|是|服务评分，1~5 分
  2|content|string|是|评价内容
  3|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
  
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "score": "2",
        "content": " 阿斯达四大撒大所大所",
        "illustration": [],
        "create_time": "2021-03-09 19:55:21.316371",
        "id": "2"
    },
    "message": "ok"
}
```

字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|提交成功后返回的退款订单 id
2|score|string|是|服务评分
3|content|string|是|评价内容
4|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
5|create_time|string|是|评价创建时间

#### 根据订单 id 查询评价

请求类型：`GET`  
请求地址：`v1/rating/order`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|order_id|integer|是| 预约订单 id
请求结果示例：
```json
{
  // HTTP status 201
    "error_code": 0,
    "data": {
        "id": 1,
        "score": 5,
        "content": "非常好，家里狗子甚至都不想回家了。",
        "illustration": [],
        "status": 2,
        "create_time": "2021-03-07 15:45:32",
        "author": {
            "id": 1,
            "nickname": "沁塵",
            "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
            "real_name": "沁塵",
            "gender": 1,
            "tel": null
        }
    },
    "message": "ok"
}
```
字段解释：

序号|参数名|类型|必填|描述
---- | --- | --- | --- | ---
1|id|integer|是|提交成功后返回的退款订单 id
2|score|string|是|服务评分
3|content|string|是|评价内容
4|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
5|status|integer|是|评价状态
6|create_time|string|是|评价创建时间
7|author|objectt|是|评价人信息

author字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 根据服务 id 查询评价列表

请求类型：`GET`
请求地址：`v1/rating/service`
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|service_id|integer|是| 服务 id
  2|page|integer|是|分页页码，指定从几页开始查询，起始页为 1
  3|count|integer|是|分页内容条数，指定一页查询多少条数据，至少为 1

请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "total": 1,
        "per_page": 10,
        "current_page": 1,
        "last_page": 1,
        "data": [
            {
                "id": 1,
                "score": 5,
                "content": "非常好，家里狗子甚至都不想回家了。",
                "illustration": [],
                "status": 2,
                "create_time": "2021-03-07 15:45:32",
                "author": {
                    "id": 1,
                    "nickname": "沁塵",
                    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
                    "real_name": "沁塵",
                    "gender": 1,
                    "tel": null
                }
            }
        ]
    },
    "message": "ok"
}

```

字段解释：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|total|integer|是|查询结果的总记录数
2|per_page|integer|是|查询记录数
3|current_page|integer|是|当前页码
4|last_page|integer|是|最大页码
5|data|any|是|分页内容  

分页内容字段解释：

序号|参数名|类型|必填|描述
---- | --- | --- | --- | ---
1|id|integer|是|提交成功后返回的退款订单 id
2|score|string|是|服务评分
3|content|string|是|评价内容
4|illustration|array|否|截图，可空。由可访问的外网图片 url 组成的数组，可多张，最多 5 张。
5|status|integer|是|评价状态
6|create_time|string|是|评价创建时间
7|author|objectt|是|评价人信息

author字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

## 用户接口

#### 查询当前用户信息

请求类型：`GET`  
请求地址：`v1/user`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|无|无|否| 无
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "id": 1,
        "nickname": "沁塵",
        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
        "real_name": "沁塵",
        "gender": 1,
        "tel": null
    },
    "message": "ok"
}
```
字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 更新当前用户信息

请求类型：`PUT`  
请求地址：`v1/user`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|nickname|string|是|用户微信昵称
2|avatar|string|是|用户头像图片地址
3|gender|integer|是|用户性别。1：男；2：女 
4|real_name|string|否|用户真实姓名
5|tel|string|否|用户手机号码
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "id": 1,
        "nickname": "沁塵",
        "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/icvFO1UdPCSmB5KpPANibbCHyktWCpsNtjtnuE0ibzHJz9sNO275JoB1Ur9HcZ25Hf9j31XiaEAXxxJBQsy5OJibCeg/132",
        "real_name": "沁塵",
        "gender": 1,
        "tel": null
    },
    "message": "ok"
}
```
字段解释：

序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|用户 id
2|nickname|string|是|用户微信昵称
3|avatar|string|是|用户头像图片地址 
4|real_name|string|否|用户真实姓名
5|gender|integer|是|用户性别。1：男；2：女
6|tel|string|否|用户手机号码

#### 获取当前用户的TIM登陆凭证

请求类型：`GET`  
请求地址：`v1/user/sign`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|无|无|否| 无
请求结果示例：

```json
{
    "error_code": 0,
    "data": {
        "user_id": 1,
        "sign": "eJyrVgrxCdYrSy1SslIy0jNQ0gHzM1NS80oy0zLBwoZQweKU7MSCgswUJStDEwMDE1MLYxNDiExqRUFmUaqSlaWxmYEBRKgkMxcoYGhmaGpkYGRiaAk1IjMdaKBlRGpOUlpZRo5jslGoc0mlu4VXQLa3k3aiQXFiYLGvb767QYlJpmVYdranrVItAJr*Lwo_"
    },
    "message": "ok"
}
```

字段解释：  
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|user_id|integer|是|用户 id
2|sign|string|是|TIM 登陆凭证

## 文件上传接口

请求类型：`POST`  
请求地址：`v1/file`  
请求格式：`form-data`  
请求参数：
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
  1|file1|file|是| 参数可以指定多个，代表多图上传。多图上传时参数名需保证唯一

请求结果示例：

```json
{
  // HTTP status 201
    "error_code": 0,
    "data": [
        {
            "id": "11",
            "key": "file1",
            "path": "http://qinchenju.com/homemaking/storage/20210309/980e4c19f38a614c8d862855f211e341.png"
        }
    ],
    "message": "ok"
}
```

字段解释：  
序号|参数名|类型|必填|描述
  ---- | --- | --- | --- | ---
1|id|integer|是|图片 id
2|key|string|是|上传时指定的唯一参数名
3|path|string|是|图片 url 地址

## 附录

### 错误码

序号|错误码|错误描述
---- | --- | --- 
1|9999  |慕课网防盗版校验不通过 
2|10000 |请求参数错误 
3|10001 |请求 header 中未携带 token 令牌 
4|10002 |token令牌无效或已过期 
5|10003 |未获取到上传的文件资源 
6|10004 |上传的文件扩展名不合法 
7|10005 |上传的文件数量超过限制 
8|10006 |上传的文件体积超过限制 
9|10007 |文件保存失败 
10|10008 |访问的资源不存在 
11|10009 |操作失败 
12|10010 |请求权限不足 
13|10011 |目标服务不在已发布状态 
14|10012 |没有权限修改该订单 
15|10013 |同一订单存在尚未完结的退款申请 
16|10014 |没有权限同意或拒绝该订单的退款申请 
17|10015 |服务提供者只允许操作同意或拒绝退款申请 
18|10016 |退款申请处理失败 
19|10017 |订单状态更新失败 
20|10018 |服务提供者不能给自己的服务评价 
21|10019 |评价关联订单的消费者不是当前用户 
22|10020 |待评价服务与订单关联服务信息不符 
23|10021 |您已评价过该订单 
24|10022 |订单评价失败 
25|10023 |未支付或已确认的订单不允许退款 
26|10024 |该订单消费者不是当前请求用户'
27|10025 |云函数内部异常，请查看控制台日志
28|10026 |重复签到
29|10027 |签到失败
30|10028 |签到失败

### 枚举字典

#### 服务类型枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|在提供|1|用户发布在小程序上可供被人预约的服务
  2|正在找|2|用户根据自己的需求发布的服务。其他用户可以按照需求内容推荐自己已发布的服务给该用户预约下单

#### 角色类型枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|发布者|1|提供了一个可供用户预约服务的用户
  2|消费者|2|预约服务的用户

#### 服务状态枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|待审核|0|1.在小程序中创建任意类型的服务之后会进入此状态；2.修改了一个已经发布的服务会重新进入此状态
  2|待发布|1|1.新增的服务在后台审核之后会进入此状态；2.主动暂停发布已经发布的服务会进入此状态。
  3|已发布|2|用户点击发布后会进入此状态
  4|已下架|3|因违规强制被强制下架后会进入此状态
  5|已取消|4|用户主动点击取消服务后会进入此状态
  6|审核不通过|5|新增的服务审核不通过会进入此状态

#### 服务操作枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|发布服务|1|
  2|暂停发布|2|
  3|取消服务|3|

#### 预约订单状态枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|待同意|0|提交预约订单后预约订单会进入此状态
  2|待支付|1|发布者同意后，预约订单会进入此状态
  3|待确认|2|消费者支付订单金额后预约订单会进入此状态
  4|待评价|3|消费者确认了订单后预约订单会进入此状态
  5|已完成|4|消费者评价了订单后预约订单会进入此状态
  6|已取消|5|消费者主动取消了订单预约订单会进入此状态  
  7|已拒绝|6|发布者拒绝了消费者的预约请求后预约订单会进入此状态

#### 预约订单操作枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|同意预约|1|仅服务发布者操作
  2|拒绝预约|2|仅服务发布者操作
  3|支付|3|仅消费者操作
  4|确认订单|4|仅消费者操作
  5|评价|5|仅消费者操作
  6|退款|6|仅消费者操作
  7|取消订单|7|仅消费者操作

#### 退款订单状态枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|待同意|0|消费者发起退款申请后退款订单进入此状态
  2|已同意|1|发布者同意退款请求后退款订单进入此状态
  3|已退款|2|系统操作退款后退款订单进入此状态
  4|已完成|3|消费者收到退款确认订单后退款订单进入此状态
  5|已拒绝|4|发布者拒绝退款请求后退款订单进入此状态
  6|已取消|5|消费者主动取消订单后退款订单进入此状态

#### 退款订单操作枚举

序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|同意退款|1|仅服务发布者操作
  2|拒绝退款|2|仅服务发布者操作
  3|取消订单|3|仅消费者操作
  4|确认订单|4|仅消费者操作

#### 评价状态枚举
序号|枚举名称|枚举值|备注
  ---- | --- | --- | --- 
  1|已隐藏|0|
  2|待审核|1|
  3|已展示|2|