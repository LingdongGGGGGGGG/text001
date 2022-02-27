import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue';//这些import必须单引号，否则报错
import Retail_out from '@/views/retail_out.vue';//点vue必须写
import Retail_back from '@/views/retail_back.vue';
import Purchase_order from '@/views/purchase_order.vue';
import Purchase_in from '@/views/purchase_in.vue';
import Purchase_back from '@/views/purchase_back.vue';
import Sale_order from '@/views/sale_order.vue';
import Sale_out from '@/views/sale_out.vue';
import Sale_back from '@/views/sale_back.vue';
import Order_in from '@/views/order_in.vue';
import Order_out from '@/views/order_out.vue';
import Allocation_out from '@/views/allocation_out.vue';
import Assemble from '@/views/assemble.vue';
import Disassemble from '@/views/disassemble.vue';
import StockCheck from '@/views/stockCheck.vue';
import Financial from '@/views/financial.vue';
import Item_in from '@/views/item_in.vue';
import Item_out from '@/views/item_out.vue';
import Money_out from '@/views/money_out.vue';
import Money_in from '@/views/money_in.vue';
import Produce from '@/views/produce.vue';
import Material_stock from '@/views/material_stock.vue';
import Sale_out_report from '@/views/sale_out_report.vue';
import Account_report from '@/views/account_report.vue';
import Buy_in_report from '@/views/buy_in_report.vue';
import In_detail from '@/views/in_detail.vue';
import Out_detail from '@/views/out_detail.vue';
import Allocation_detail from '@/views/allocation_detail.vue';
import In_material_count from '@/views/in_material_count.vue';
import Out_material_count from '@/views/out_material_count.vue';
import In_out_stock_report from '@/views/in_out_stock_report.vue';
import Customer_account from '@/views/customer_account.vue';
import Vendor_account from '@/views/vendor_account.vue';
import Stock_warning_report from '@/views/stock_warning_report.vue';
import SaleSort from '@/views/saleSort.vue';
import MinusStockStatistics from '@/views/minusStockStatistics.vue';
import ProfitReport from '@/views/profitReport.vue';
import AttributeStock from '@/views/attributeStock.vue';
import SaleRatioStatistics from '@/views/saleRatioStatistics.vue';
import Material_Category from '@/views/material_category.vue';
import Material from '@/views/material.vue';
import Unit from '@/views/unit.vue';
import Serial_number from '@/views/serial_number.vue';
import Material_attribute from '@/views/material_attribute.vue';
import Vendor from '@/views/vendor.vue';
import Customer from '@/views/customer.vue';
import Member from '@/views/member.vue';
import Depot from '@/views/depot.vue';
import In_out_item from '@/views/in_out_item.vue';
import Account from '@/views/account.vue';
import Person from '@/views/person.vue';
import Car from '@/views/car.vue';
import CustomerFollow from '@/views/customerfollow.vue';
import Role from '@/views/role.vue';
import User from '@/views/user.vue';
import Organization from '@/views/organization.vue';
import Log from '@/views/log.vue';
import System_config from '@/views/system_config.vue';
const router = createRouter({
    history: createWebHashHistory(), // hash 模式
    routes: [
        {
            path: '/',
            name:Index,
            component: Index
        },
        {
            path:'/retail_out',
            name:Retail_out,
            component:Retail_out
        },
        {
            path:'/retail_back',
            name:Retail_back,
            component:Retail_back
        },
        {
            path:'/purchase_order',
            name:Purchase_order,
            component:Purchase_order
        },
        {
            path:'/purchase_in',
            name:Purchase_in,
            component:Purchase_in
        },
        {
            path:'/purchase_back',
            name:Purchase_back,
            component:Purchase_back
        },
        {
            path:'/sale_order',
            name:Sale_order,
            component:Sale_order

        },
        {
            path:'/sale_out',
            name:Sale_out,
            component:Sale_out
        },
        {
            path:'/sale_back',
            name:Sale_back,
            component:Sale_back
        },
        {
            path:'/other_in',
            name:Order_in,
            component:Order_in
        },
        {
            path:'/other_out',
            name:Order_out,
            component:Order_out
        },
        {
            path:'/allocation_out',
            name:Allocation_out,
            component:Allocation_out
        },
        {
            path:'/assemble',
            name:Assemble,
            component:Assemble
        },
        {
            path:'/disassemble',
            name:Disassemble,
            component:Disassemble
        },
        {
            path:'/stockCheck',
            name:StockCheck,
            component:StockCheck
        },
        {
            path:'/financial',
            name:Financial,
            component:Financial
        },
        {
            path:'/item_in',
            name:Item_in,
            component:Item_in
        },
        {
            path:'/item_out',
            name:Item_out,
            component:Item_out
        },
        {
            path:'/money_out',
            name:Money_out,
            component:Money_out
        },
        {
            path:'/money_in',
            name:Money_in,
            component:Money_in
        },
        {
            path:'/produce',
            name:Produce,
            component:Produce
        },
        {
            path:'/material_stock',
            name:Material_stock,
            component:Material_stock
        },{path:'/account_report',
            name:Account_report,
            component:Account_report},
        {
            path:'/buy_in_report',
            name:Buy_in_report,
            component:Buy_in_report
        },
        {
            path:'/sale_out_report',
            name:Sale_out_report,
            component:Sale_out_report
        },{
            path:'/in_detail',
            name:In_detail,
            component:In_detail
        },{
            path:'/out_detail',
            name:Out_detail,
            component:Out_detail
        },{
            path:'/allocation_detail',
            name:Allocation_detail,
            component:Allocation_detail
        },{
            path:'/in_material_count',
            name:In_material_count,
            component:In_material_count
        },{
            path:'/out_material_count',
            name:Out_material_count,
            component:Out_material_count
        },{
            path:'/in_out_stock_report',
            name:In_out_stock_report,
            component:In_out_stock_report
        },{
            path:'/customer_account',
            name:Customer_account,
            component:Customer_account
        },
        {
            path:'/in_out_stock_report',
            name:In_out_stock_report,
            component:In_out_stock_report},
        {
            path:'/vendor_account',
            name:Vendor_account,
            component:Vendor_account
        },{
            path:'/stock_warning_report',
            name:Stock_warning_report,
            component:Stock_warning_report
        },
        {
            path:'/in_out_stock_report',
            name:In_out_stock_report,
            component:In_out_stock_report
        },
        {
            path:'/saleRatioStatistics',
            name:SaleRatioStatistics,
            component:SaleRatioStatistics
        },
        {
            path:'/saleSort',
            name:SaleSort,
            component:SaleSort
        },
        {
            path:'/minusStockStatistics',
            name:MinusStockStatistics,
            component:MinusStockStatistics
        },
        {
            path:'/profitReport',
            name:ProfitReport,
            component:ProfitReport
        },
        {
            path:'/attributeStock',
            name:AttributeStock,
            component:AttributeStock
        },
        {
            path:'/material_category',
            name:Material_Category,
            component:Material_Category
        },
        {
            path:'/material',
            name:Material,
            component:Material
        },
        {
            path:'/unit',
            name:Unit,
            component:Unit
        },
        {
            path:'/serial_number',
            name:Serial_number,
            component:Serial_number
        },
        {
            path:'/material_attribute',
            name:Material_attribute,
            component:Material_attribute
        },
        {
            path:'/vendor',
            name:Vendor,
            component:Vendor
        },
        {
            path:'/customer',
            name:Customer,
            component:Customer
        },
        {
            path:'/member',
            name:Member,
            component:Member
        },
        {
            path:'/depot',
            name:Depot,
            component:Depot
        },
        {
            path:'/in_out_item',
            name:In_out_item,
            component:In_out_item
        },
        {
            path:'/account',
            name:Account,
            component:Account
        },
        {
            path:'/person',
            name:Person,
            component:Person
        },
        {
            path:'/car',
            name:Car,
            component:Car
        },
        {
            path:'/customerFollow',
            name:CustomerFollow,
            component:CustomerFollow
        },
        {
            path:'/role',
            name:Role,
            component:Role
        },
        {
            path:'/user',
            name:User,
            component:User
        },
        {
            path:'/organization',
            name:Organization,
            component:Organization
        },
        {
            path:'/log',
            name:Log,
            component:Log
        },
        {
            path:'/system_config',
            name:System_config,
            component:System_config
        }
    ]
})

export default router