import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4c43dc61f545487bbd35ceaf3d470724'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'ef26e68243e241ae81edde37b65bcfa8'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '23e1c5dbe52c45a48991bc63104a784c'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: 'dc52a52084504253be9b9b96ea5ce74f'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '977d28d6fd234cbc99ce31c741887bd7'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'de949d3ff4d8449abc2ecd880b557134'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '44208b8cb4044c558e2882c49a7f9c03'
                    }
                }
            }
        }
    }
}
