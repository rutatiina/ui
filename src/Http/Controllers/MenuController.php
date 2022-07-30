<?php

namespace Rutatiina\UI\Http\Controllers;

use App;
use App\Http\Controllers\Controller;


class MenuController extends Controller
{

    public function __construct()
    {}

    private function apps()
    {
        return [
            'name' => 'Apps',
            'info' => 'Apps',
            'router' => ['link' => '/apps'],
            'link' => null,
            'icon' => ['class' => 'icon-versions'],
            'submenu' => [
                [
                    'name' => 'Accounting',
                    'title' => 'Accounting app',
                    'router' => ['link' => '/financial-accounts/dashboard'],
                    'link' => '/financial-accounts/dashboard',
                    'badge' => [
                        'show' => false,
                        'router' => ['link' => '/'],
                        'link' => null
                    ]
                ]
            ]
        ];
    }

    private function accounting()
    {
        $menu = [
            [
                'name' => 'Dashboard',
                'info' => 'Accounting summary',
                'router' => [
                    'link' => '/financial-accounts/dashboard',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-home4'],
                'submenu' => []
            ],
            [
                'name' => 'Contacts',
                'info' => null,
                'router' => [
                    'link' => '/contacts',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-users2'],
                'badge' => [
                    'show' => true,
                    'router' => ['link' => '/contacts/create'],
                    'link' => null
                ],
                'submenu' => [
                    /*[
                        'name' => 'Contacts',
                        'title' => 'View Contact',
                        'router' => ['link' => '/contacts'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/contacts/create'],
                            'link' => null
                        ]
                    ]*/
                ]
            ],
            [
                'name' => 'Items',
                'info' => null,
                'router' => ['link' => '/items'],
                'link' => null,
                'icon' => ['class' => 'icon-price-tags'],
                'badge' => [
                    'show' => true,
                    'router' => ['link' => '/items/create'],
                    'link' => null
                ],
                'submenu' => [
                    [
                        'name' => 'Items',
                        'title' => 'View Items',
                        'router' => ['link' => '/items'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/items/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Categories',
                        'title' => 'Item categories',
                        'router' => ['link' => '/items/categories'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/items/categories/create'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Banking',
                'info' => 'Bank accounts & statements',
                'router' => ['link' => '/banking'],
                'link' => null, //route('banking.index'),
                'icon' => ['class' => 'icon-library2'],
                'submenu' => []
            ],
            [
                'name' => 'POS',
                'info' => 'Point of sales',
                'router' => ['link' => '/pos'],
                'link' => null,
                'icon' => ['class' => 'icon-bag'],
                'submenu' => [
                        [
                            'name' => 'Point of sales',
                            'title' => 'Point of sales',
                            'router' => ['link' => '/pos'],
                            'link' => route('pos.index'),
                            'badge' => [
                                'show' => false,
                                'router' => ['link' => '/pos'],
                                'link' => null,
                            ]
                        ],
                        /*[
                            'name' => 'Cashier',
                            'title' => 'Cashier / drawer / cash',
                            'router' => ['link' => '/pos/orders'],
                            'link' => null,
                            'badge' => [
                                'show' => false,
                                'router' => ['link' => '/pos/create'],
                                'link' => null,
                            ]
                        ],*/
                        [
                            'name' => 'Orders / sales',
                            'title' => 'Point of Sales Orders / sales',
                            'router' => ['link' => '/pos/orders'],
                            'link' => null,
                            'badge' => [
                                'show' => false,
                                'router' => ['link' => '/pos/orders'],
                                'link' => null,
                            ]
                        ],
                        /*[
                            'name' => 'Tax setings',
                            'title' => 'POS Tax setings',
                            'router' => ['link' => '/pos/taxes'],
                            'link' => null,
                            'badge' => [
                                'show' => false,
                                'router' => ['link' => '/pos/taxes/create'],
                                'link' => null,
                            ]
                        ]*/
                ]
            ],
            [
                'name' => 'Sales',
                'code' => 'sales',
                'info' => null,
                'router' => ['link' => '/financial-accounts/sales'],
                'link' => null,
                'icon' => ['class' => 'icon-cart'],
                'submenu' => [
                    /*[
                        'name' => 'Cash sales',
                        'title' => 'Cash sales',
                        'router' => ['link' => '/cash-sales'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/cash-sales/create'],
                            'link' => null,
                        ]
                    ],*/
                    /*[
                        'name' => 'Point of sales',
                        'title' => 'Point of sales',
                        'router' => ['link' => '/pos/create'],
                        'link' => null,
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => '/pos/create'],
                            'link' => null,
                        ]
                    ],*/
                    [
                        'name' => 'Estimates',
                        'title' => 'Estimates',
                        'router' => ['link' => '/estimates'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/estimates/create'],
                            'link' => null,
                        ]
                    ],
                    [
                        'name' => 'Retainer Invoices',
                        'title' => 'Retainer Invoices',
                        'router' => ['link' => '/retainer-invoices'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/retainer-invoices/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Sales Orders',
                        'title' => 'Sales Orders',
                        'router' => ['link' => '/sales-orders'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/sales-orders/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Invoices',
                        'title' => 'Invoices',
                        'router' => ['link' => '/invoices'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/invoices/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Payments Received',
                        'title' => 'Payments Received',
                        'router' => ['link' => '/payments-received'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/payments-received/create'],
                            'link' => null,
                        ]
                    ],
                    [
                        'name' => 'Recurring Invoices',
                        'title' => 'Recurring Invoices',
                        'router' => ['link' => '/recurring-invoices'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/recurring-invoices/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Credit Notes',
                        'title' => 'Credit Notes',
                        'router' => ['link' => '/credit-notes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/credit-notes/create'],
                            'link' => null
                        ]
                    ],
                ]
            ],
            [
                'name' => 'Purchases',
                'info' => null,
                'router' => ['link' => '/financial-accounts/purchases'],
                'link' => null,
                'icon' => ['class' => 'icon-price-tag'],
                'submenu' => [
                    [
                        'name' => 'Expenses',
                        'title' => 'Expenses',
                        'router' => ['link' => '/expenses'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/expenses/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Recurring Expenses',
                        'title' => 'Recurring Expenses',
                        'router' => ['link' => '/recurring-expenses'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/recurring-expenses/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Purchase Orders',
                        'title' => 'Purchase Orders',
                        'router' => ['link' => '/purchase-orders'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/purchase-orders/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Bills',
                        'title' => 'Bills',
                        'router' => ['link' => '/bills'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/bills/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Payments Made',
                        'title' => 'Payments Made',
                        'router' => ['link' => '/payments-made'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/payments-made/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Recurring Bills',
                        'title' => 'Recurring Bills',
                        'router' => ['link' => '/recurring-bills'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/recurring-bills/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Debit Notes',
                        'title' => 'Debit Notes',
                        'router' => ['link' => '/debit-notes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/debit-notes/create'],
                            'link' => null
                        ]
                    ],
                ]
            ],
            //*
            [
                'name' => 'Inventory',
                'code' => 'inventory',
                'info' => null,
                'router' => ['link' => '/inventory'],
                'link' => null,
                'icon' => ['class' => 'icon-grid6'],
                'submenu' => [
                    //[
                    //    'name' => '* Issues',
                    //    'title' => 'Inventory Issues',
                    //    'router' => ['link' => '/financial-accounts/inventory/issues'],
                    //    'link' => null,
                    //    'badge' => [
                    //        'show' => false,
                    //        'router' => ['link' => ''],
                    //        'link' => null
                    //    ]
                    //],
                    [
                        'name' => 'Item(s) inventory',
                        'title' => 'Item(s) inventory',
                        //'router' => ['link' => '/purchases'],
                        'router' => ['link' => '/inventory/items'],
                        'link' => null,
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => ''],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Goods received',
                        'title' => 'Goods received',
                        'router' => ['link' => '/goods-received'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/goods-received/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Goods Delivery',
                        'title' => 'Delivery notes',
                        'router' => ['link' => '/goods-delivered'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/goods-delivered/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Goods issued',
                        'title' => 'Goods issued',
                        'router' => ['link' => '/goods-issued'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/goods-issued/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Goods returned',
                        'title' => 'Goods returned',
                        'router' => ['link' => '/goods-returned'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/goods-returned/create'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            //*/
            [
                'name' => 'Advanced',
                'info' => null,
                'router' => ['link' => '/financial-accounts/advanced'],
                'link' => null,
                'icon' => ['class' => 'icon-newspaper2'],
                'submenu' => [
                    [
                        'name' => 'Journal entries',
                        'title' => 'Journal entries',
                        'router' => ['link' => '/journal-entries'], //['link' => '/financial-accounts/advanced/journals'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/journal-entries/create'], //['link' => '/financial-accounts/advanced/journals/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Chart of Accounts',
                        'title' => 'Chart of Accounts',
                        'router' => ['link' => '/financial-accounts'],
                        'link' => null,
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => ''],
                            'link' => null
                        ]
                    ],
                    /*[
                        'name' => 'Import transactions',
                        'router' => ['link' => 'accounting.transactions.imports'],
                        'link' => route('accounting.transactions.imports.index'),
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => ''],
                            'link' => null
                        ]
                    ],*/
                    [
                        'name' => 'Taxes',
                        'router' => ['link' => '/taxes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/taxes/create'],
                            'link' => null
                        ]
                    ],
                    /*[
                        'name' => 'Transaction Entrees',
                        'router' => ['link' => '/financial-accounts/advanced/transaction-entrees'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/financial-accounts/advanced/transaction-entrees/create'],
                            'link' => null
                        ]
                    ]*/
                ]
            ],
            [
                'name' => 'Reports',
                'info' => 'Accounting Reports',
                'router' => ['link' => '/financial-accounts/reports'],
                'link' => null,
                'icon' => ['class' => 'icon-chart'],
                'submenu' => []
            ],
            [
                'name' => 'Users',
                'info' => 'Manage system users',
                'router' => ['link' => '/users'],
                'link' => null,
                'icon' => ['class' => 'icon-people'],
                'submenu' => []
            ],
            [
                'name' => 'Settings',
                'info' => 'System Settings',
                'router' => ['link' => '/settings/organisations'],
                'link' => null,
                'icon' => ['class' => 'icon-cog4'],
                'submenu' => [
                    [
                        'name' => 'Organisation',
                        'router' => ['link' => '/settings/organisations',],
                        'link' => null,
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => '/'],
                            'link' => null,
                        ]
                    ],
                    [
                        'name' => 'Roles & Permissions',
                        'router' => ['link' => '/settings/roles',],
                        'link' => null,
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => '/'],
                            'link' => null,
                        ]
                    ],
                ]
            ],
            /*
            [
                'name' => 'Apps',
                'info' => 'Apps',
                'router' => ['link' => '/apps'],
                'link' => null,
                'icon' => ['class' => 'icon-versions'],
                'submenu' => [
                    [
                        'name' => 'CRBT - Caller Ring Back Tone',
                        'title' => 'CRBT reports',
                        'router' => ['link' => '/crbt/statements'],
                        'link' => url('/crbt/statements'),
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => '/crbt/statements'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'AutoCare Workshop',
                        'title' => 'AutoCare Workshop',
                        'router' => ['link' => '/workshop'],
                        'link' => url('/workshop'),
                        'badge' => [
                            'show' => false,
                            'router' => ['link' => '/workshop'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            */
        ];
        return $menu;
    }

    private function settings()
    {
        $menu = [
            [
                'name' => 'Settings',
                'header' => true
            ],
            [
                'name' => 'Organisation',
                'info' => null,
                'router' => [
                    'link' => '/settings/organisations',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-office'],
                'submenu' => []
            ],
            [
                'name' => 'Branches',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/branches',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-city'],
                'submenu' => []
            ],
            [
                'name' => 'Localization',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/localization',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-watch2'],
                'submenu' => []
            ],
            [
                'name' => 'Roles & Permissions',
                'info' => null,
                'router' => [
                    'link' => '/settings/roles',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-key'],
                'submenu' => []
            ],
            [
                'name' => 'Email Settings',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/emails',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-mention'],
                'submenu' => []
            ],
            [
                'name' => 'Invoice Settings',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/invoice',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-pencil5'],
                'submenu' => []
            ],
            [
                'name' => 'Salary Settings',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/salaray',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-cash4'],
                'submenu' => []
            ],
            [
                'name' => 'Notifications',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/notifications',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-notification2'],
                'submenu' => []
            ],
            [
                'name' => 'Change Password',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/password-change',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-lock'],
                'submenu' => []
            ],
            [
                'name' => 'Leave Type',
                'info' => null,
                'class' => 'disabled',
                'router' => [
                    'link' => '/settings/leave-type',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-calendar2'],
                'submenu' => []
            ],
            [
                'name' => 'Go back',
                'header' => true
            ],
            [
                'name' => 'Back to Home',
                'info' => 'Accounting summary',
                'router' => [
                    'link' => '/',
                ],
                'link' => url('/'),
                'icon' => ['class' => 'icon-circle-left2'],
                'submenu' => []
            ],
        ];
        return $menu;
    }

    private function crbt()
    {
        $menu = [
            [
                'name' => 'Dashboard',
                'info' => 'CRBT summary',
                'router' => [
                    'link' => '/crbt/dashboard',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-home4'],
                'submenu' => []
            ],
            [
                'name' => 'Transactions',
                'info' => 'Transactions from statements',
                'router' => ['link' => '/crbt/transactions'],
                'link' => null,
                'icon' => ['class' => 'icon-cash3'],
                'submenu' => []
            ],
            [
                'name' => 'Statements',
                'info' => 'Statements',
                'router' => [
                    'link' => '/crbt/statements',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-users2'],
                'submenu' => [
                    [
                        'name' => 'Statements',
                        'title' => 'View Statements',
                        'router' => ['link' => '/crbt/statements'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Upload',
                            'router' => ['link' => '/crbt/statements/upload'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Revenue Calculation',
                'info' => null,
                'router' => ['link' => '/crbt/revenue-calculations'],
                'link' => null,
                'icon' => ['class' => 'icon-cash3'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/crbt/revenue-calculations/create'],
                    'link' => null
                ],
                'submenu' => []
            ],
            [
                'name' => 'Deductions',
                'info' => null,
                'router' => ['link' => '/crbt/deductions'],
                'link' => null,
                'icon' => ['class' => 'icon-price-tags'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/crbt/deductions/create'],
                    'link' => null
                ],
                'submenu' => []
            ],
            [
                'name' => 'Networks',
                'info' => null,
                'router' => ['link' => '/crbt/networks'],
                'link' => null,
                'icon' => ['class' => 'icon-price-tags'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/crbt/networks/create'],
                    'link' => null
                ],
                'submenu' => []
            ],
            [
                'name' => 'Artists',
                'info' => null,
                'router' => ['link' => '/crbt/artists'],
                'link' => null,
                'icon' => ['class' => 'icon-mic2'],
                'submenu' => []
            ],
            [
                'name' => 'Labels',
                'info' => null,
                'router' => ['link' => '/crbt/labels'],
                'link' => null,
                'icon' => ['class' => 'icon-album'],
                'submenu' => []
            ],
            [
                'name' => 'Reports',
                'info' => 'Accounting Reports',
                'router' => ['link' => '/crbt/reports'],
                'link' => null,
                'icon' => ['class' => 'icon-chart'],
                'submenu' => []
            ],
            [
                'name' => 'Go back',
                'header' => true
            ],
            [
                'name' => 'Back to Home',
                'info' => 'Accounting summary',
                'router' => ['link' => null],
                'link' => '/',
                'icon' => ['class' => 'icon-circle-left2'],
                'submenu' => []
            ]
        ];
        return $menu;
    }

    private function workshop()
    {
        $menu = [
            [
                'name' => 'Dashboard',
                'info' => 'Workshop summary',
                'router' => [
                    'link' => '/workshop/dashboard',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-home4'],
                'submenu' => []
            ],
            [
                'name' => 'Contacts',
                'info' => null,
                'router' => [
                    'link' => '/workshop/contacts',
                ],
                'link' => null,
                'icon' => ['class' => 'icon-users2'],
                'badge' => [
                    'show' => true,
                    'router' => ['link' => '/workshop/contacts/create'],
                    'link' => null
                ],
                'submenu' => []
            ],
            [
                'name' => 'Job Centre',
                'info' => 'Manage Jobs',
                'router' => ['link' => '/workshop/jobs'],
                'link' => null,
                'icon' => ['class' => 'icon-cash3'],
                /*'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/workshop/jobs/create'],
                    'link' => null
                ],*/
                'submenu' => [
                    [
                        'name' => 'Jobs',
                        'title' => 'View Statements',
                        'router' => ['link' => '/workshop/jobs'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Create',
                            'router' => ['link' => '/workshop/jobs/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Inspection Orders',
                        'title' => 'Inspection Orders',
                        'router' => ['link' => '/workshop/jobs/inspections/orders'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Settings',
                            'router' => ['link' => '/workshop/jobs/inspections/settings'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Inspections',
                        'title' => 'Inspections',
                        'router' => ['link' => '/workshop/jobs/inspections'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Settings',
                            'router' => ['link' => '/workshop/jobs/inspections/settings'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Vehicles',
                'info' => null,
                'router' => ['link' => '/workshop/vehicles',],
                'link' => null,
                'icon' => ['class' => 'icon-car'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/workshop/vehicles/create'],
                    'link' => null
                ],
                'submenu' => [
                    [
                        'name' => 'Vehicles',
                        'title' => 'Vehicles',
                        'router' => ['link' => '/workshop/vehicles'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Create',
                            'router' => ['link' => '/workshop/vehicles/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Make (manufacture)',
                        'title' => 'Manufactures',
                        'router' => ['link' => '/workshop/vehicles/makes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Create',
                            'router' => ['link' => '/workshop/vehicles/makes/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Models',
                        'title' => 'Models',
                        'router' => ['link' => '/workshop/vehicles/models'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Create',
                            'router' => ['link' => '/workshop/vehicles/models/create'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            /*[
                'name' => 'Mechanics',
                'info' => null,
                'router' => ['link' => '/workshop/mechanics'],
                'link' => null,
                'icon' => ['class' => 'icon-wrench'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/workshop/mechanics/create'],
                    'link' => null
                ],
                'submenu' => []
            ],
            [
                'name' => 'Service Advisers',
                'info' => null,
                'router' => ['link' => '/workshop/service-advisers'],
                'link' => null,
                'icon' => ['class' => 'icon-users2'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/workshop/service-advisers/create'],
                    'link' => null
                ],
                'submenu' => []
            ],*/
            [
                'name' => 'Parts & Accessories',
                'info' => null,
                'router' => ['link' => '/workshop/parts-and-accessories'],
                'link' => null,
                'icon' => ['class' => 'icon-price-tags'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/workshop/parts-and-accessories/create'],
                    'link' => null
                ],
                'submenu' => []
            ],
            [
                'name' => 'Services',
                'info' => null,
                'router' => ['link' => '/workshop/services'],
                'link' => null,
                'icon' => ['class' => 'icon-hammer-wrench'],
                'badge' => [
                    'show' => true,
                    'text' => 'Create',
                    'router' => ['link' => '/workshop/services/create'],
                    'link' => null
                ],
                'submenu' => []
            ],
            [
                'name' => 'Billing',
                'info' => null,
                'router' => ['link' => '/workshop/billing',],
                'link' => null,
                'icon' => ['class' => 'icon-drawer3'],
                'submenu' => [
                    [
                        'name' => 'Invoices',
                        'title' => 'Invoices',
                        'router' => ['link' => '/workshop/billing/invoices'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Create',
                            'router' => ['link' => '/workshop/billing/invoices/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Sales Orders',
                        'title' => 'Sales Orders',
                        'router' => ['link' => '/workshop/billing/sales-orders'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/billing/sales-orders/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Quotations',
                        'title' => 'Quotations',
                        'router' => ['link' => '/workshop/billing/quotations'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Create',
                            'router' => ['link' => '/workshop/billing/quotations/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Customer Payments',
                        'title' => 'Customer Payments',
                        'router' => ['link' => '/workshop/billing/receipts'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'text' => 'Create',
                            'router' => ['link' => '/workshop/billing/receipts/create'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Suppliers',
                'info' => 'For Parts & Services',
                'router' => ['link' => '/workshop/suppliers'],
                'link' => null,
                'icon' => ['class' => 'icon-clipboard3'],
                'submenu' => [
                    [
                        'name' => 'Suppliers',
                        'title' => 'Suppliers',
                        'router' => ['link' => '/workshop/contacts?type=supplier'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/contacts/create?type=supplier'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Expenses',
                        'title' => 'Expenses',
                        'router' => ['link' => '/workshop/suppliers/expenses'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/suppliers/expenses/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Purchase Orders',
                        'title' => 'Purchase Orders',
                        'router' => ['link' => '/workshop/suppliers/purchase-orders'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/suppliers/purchase-orders/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Bills',
                        'title' => 'Bills',
                        'router' => ['link' => '/workshop/suppliers/bills'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/suppliers/bills/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Payments',
                        'title' => 'Payments',
                        'router' => ['link' => '/workshop/suppliers/payments'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/suppliers/payments/create'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            [
                'name' => 'Warehouse',
                'info' => null,
                'router' => ['link' => '/workshop/warehouse'],
                'link' => null,
                'icon' => ['class' => 'icon-home7'],
                'submenu' => [
                    [
                        'name' => 'Goods received',
                        'title' => 'Goods received',
                        'router' => ['link' => '/workshop/warehouse/goods-received-notes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/warehouse/goods-received-notes/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Delivery notes',
                        'title' => 'Delivery notes',
                        'router' => ['link' => '/workshop/warehouse/delivery-notes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/warehouse/delivery-notes/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Goods issued',
                        'title' => 'Goods issued',
                        'router' => ['link' => '/workshop/warehouse/goods-issued-notes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/warehouse/goods-issued-notes/create'],
                            'link' => null
                        ]
                    ],
                    [
                        'name' => 'Goods returned',
                        'title' => 'Goods returned',
                        'router' => ['link' => '/workshop/warehouse/goods-returned-notes'],
                        'link' => null,
                        'badge' => [
                            'show' => true,
                            'router' => ['link' => '/workshop/warehouse/goods-returned-notes/create'],
                            'link' => null
                        ]
                    ]
                ]
            ],
            /*
            [
                'name' => 'Labour Control',
                'info' => null,
                'router' => ['link' => '/workshop/labour-control'],
                'link' => null,
                'icon' => ['class' => 'icon-users4'],
                'submenu' => []
            ],
            [
                'name' => 'Reports',
                'info' => 'Workshop Reports',
                'router' => ['link' => '/workshop/reports'],
                'link' => null,
                'icon' => ['class' => 'icon-chart'],
                'submenu' => []
            ],
            */
            [
                'name' => 'Go back',
                'header' => true
            ],
            [
                'name' => 'Back to Home',
                'info' => 'Accounting summary',
                'router' => ['link' => null],
                'link' => '/',
                'icon' => ['class' => 'icon-circle-left2'],
                'submenu' => []
            ]
        ];
        return $menu;
    }

    ##########################################################

    public function menu($menuName)
    {
        switch ($menuName) {
            case 'settings':
                return $this->settings();
                break;
            case 'accounting':
                return $this->accounting();
                break;
            case 'crbt':
                return $this->crbt();
                break;
            case 'workshop':
                return $this->workshop();
                break;
            default;
                return [];
                break;
        }

    }
}

