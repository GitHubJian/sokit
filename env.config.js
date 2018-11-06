process.env.NODE_ENV = 'production'; // 配置config的环境变量
process.env.NODE_CONFIG_ENV = 'development'; // 配置config所需加载的环境变量
process.env.NODE_CONFIG_DIR = `${process.cwd() + '/config/'}`; // 配置config的路径
process.env.NODE_APP_INSTANCE = '3'; // 配置config版本
