const setCorrectApi = (str,env) => {
    const map = new Map([
        ['staging', '-boe'],
        ['pre_release', '-pre'],
        ['online', '']
    ]);
    let res = str
    for (const [key, value] of map) {
        if (key === env) {
            continue;
        }
        const reg = new RegExp(`.*(feishu|larksuite)(${value})?\\.\\w+`);
        if (reg.test(str)) {
            res = str?.replace(value, map.get(env)) || str;
        }
    }
    return res;
};

describe('profile api test', () => {
    test('feishu - online - online', () => {
        const env = "online";
        const api = "internal-api-lark-api.feishu.cn";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.feishu.cn')
    })

    test('feishu - online - pre', () => {
        const env = "online";
        const api = "internal-api-lark-api.feishu-pre.cn";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.feishu.cn')
    })

    test('feishu - online - boe', () => {
        const env = "online";
        const api = "internal-api-lark-api.feishu-boe.cn";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.feishu.cn')
    })


    test('feishu - pre - pre', () => {
        const env = "pre_release";
        const api = "internal-api-lark-api.feishu-pre.cn";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.feishu-pre.cn')
    })

    test('feishu - pre - boe', () => {
        const env = "pre_release";
        const api = "internal-api-lark-api.feishu-boe.cn";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.feishu-pre.cn')
    })

    test('larksuite - online - online', () => {
        const env = "online";
        const api = "internal-api-lark-api.larksuite.com";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.larksuite.com')
    })

    test('larksuite - online - pre', () => {
        const env = "online";
        const api = "internal-api-lark-api.larksuite-pre.com";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.larksuite.com')
    })

    test('larksuite - online - boe', () => {
        const env = "online";
        const api = "internal-api-lark-api.larksuite-boe.com";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.larksuite.com')
    })


    test('larksuite - pre - pre', () => {
        const env = "pre_release";
        const api = "internal-api-lark-api.larksuite-pre.com";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.larksuite-pre.com')
    })

    test('larksuite - pre - boe', () => {
        const env = "pre_release";
        const api = "internal-api-lark-api.larksuite-boe.com";
        expect(setCorrectApi(api,env)).toBe('internal-api-lark-api.larksuite-pre.com')
    })
})