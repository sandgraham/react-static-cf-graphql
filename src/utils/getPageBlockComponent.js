import FeatureHeader from '../components/FeatureHeader'
import FeatureVideo from '../components/FeatureVideo'
import FeatureSingle from '../components/FeatureSingle'
import FeatureRelated from '../components/FeatureRelated'
import FeatureColumns from '../components/FeatureColumns'
import FeatureLoop from '../components/FeatureLoop'
import FeatureIndex from '../components/FeatureIndex'
import FeatureImage from '../components/FeatureImage'
import CTA from '../components/CTA'
import GenericForm from '../components/GenericForm'

const componentMap = {
	'FpHeader': FeatureHeader,
	'FpVideo': FeatureVideo,
	'FpSingleFeature': FeatureSingle,
	'PgbGenericForm': GenericForm,
	'FpIndex': FeatureIndex,
	'FpRelatedContent': FeatureRelated,
	'Fp3Col': FeatureColumns,
	'FpPhoneLiveLoopVideoOrImagePlayer': FeatureLoop,
	'PgbCtaModule': CTA,
	'FpImage': FeatureImage,
}

export default (id) => componentMap[id]