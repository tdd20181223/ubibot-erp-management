# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).


常用 <type> 类型说明

feat	    新功能（feature）	             feat: add user login page
fix	        修复 bug	                    fix: resolve login timeout issue
docs	    文档更新	                    docs: update README installation guide
style	    代码格式调整（不影响逻辑）	      style: format code with prettier
refactor	重构（既不是新功能也不是修复）	  refactor: simplify auth logic
perf	    性能优化	                    perf: reduce bundle size by 20%
test	    添加或修改测试	                test: add unit test for login API
build	    构建系统或依赖变更	            build: upgrade antd to v5
ci	        CI 配置或脚本变更	            ci: add GitHub Actions workflow
chore	    杂项（如更新 .gitignore）	    chore: clean up unused dependencies
revert	    回滚提交	                    revert: feat: add experimental feature