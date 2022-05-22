import {Fonts} from 'common/Theme/Fonts';
import Images from 'common/Theme/Images';
import {Layout} from 'common/Theme/Layout';
import {Metrics} from 'common/Theme/Metrics';
import {Strings} from 'common/Theme/Strings';
import {Colors, FontSize, MetricsSizes} from 'common/Theme/Variables';
import {ButtonLayout} from 'common/Theme/ButtonLayout';
import {CheckBoxLayout} from 'common/Theme/CheckBoxLayout';
import {FadeInView} from 'common/Theme/animation/FadeInView';

export default () => {
  const fonts = Fonts({FontSize, Colors});

  return {
    colors: Colors,
    layout: Layout,
    fonts,
    images: Images,
    strings: Strings,
    metrics: Metrics,
    metricSizes: MetricsSizes,
    buttonLayout: ButtonLayout,
    checkBoxLayout: CheckBoxLayout,
    FadeInView,
  };
};
