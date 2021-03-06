import ActivityApi from './mainApis/ActivityApi';
import BannerApi from './mainApis/BannerApi';
import BrandsApi from './mainApis/BrandsApi';
import CustomerApi from './mainApis/CustomerApi';
import DevicesDocsApi from './mainApis/DevicesDocsApi';
import DevicesModelApi from './mainApis/DevicesModelApi';
import FeedbackApi from './mainApis/FeedbackApi';
import FogriseDevicesApi from './mainApis/FogriseDevicesApi';
import LightDevicesApi from './mainApis/LightDevicesApi';
import LoginApi from './mainApis/LoginApi';
import OrderApi from './mainApis/OrderApi';
import ParamsApi from './mainApis/ParamsApi';
import PermissionApi from './mainApis/PermissionApi';
import PleasureBoatsApi from './mainApis/PleasureBoatsApi';
import ProductApi from './mainApis/ProductApi';
import RoleApi from './mainApis/RoleApi';
import SmallTrainsApi from './mainApis/SmallTrainsApi';
import SysConfApi from './mainApis/SysConfApi';
import TourCarsApi from './mainApis/TourCarsApi';
import UserApi from './mainApis/UserApi';
import WifiDevicesApi from './mainApis/WifiDevicesApi';
import StrategyApi from './mainApis/StrategyApi';
import ToolsApi from './mainApis/ToolsApi';

export default class MainApi {
  public activityApi = new ActivityApi();
  public bannerApi = new BannerApi();
  public brandsApi = new BrandsApi();
  public customerApi = new CustomerApi();
  public devicesDocsApi = new DevicesDocsApi();
  public devicesModelApi = new DevicesModelApi();
  public feedbackApi = new FeedbackApi();
  public fogriseDevicesApi = new FogriseDevicesApi();
  public lightDevicesApi = new LightDevicesApi();
  public loginApi = new LoginApi();
  public orderApi = new OrderApi();
  public paramsApi = new ParamsApi();
  public permissionApi = new PermissionApi();
  public pleasureBoatsApi = new PleasureBoatsApi();
  public productApi = new ProductApi();
  public roleApi = new RoleApi();
  public smallTrainsApi = new SmallTrainsApi();
  public sysConfApi = new SysConfApi();
  public tourCarsApi = new TourCarsApi();
  public userApi = new UserApi();
  public wifiDevicesApi = new WifiDevicesApi();
  public strategyApi = new StrategyApi();
  public toolsApi = new ToolsApi();
}