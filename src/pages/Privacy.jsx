import { ShieldCheck, Heart, Database, FileLock, UserCheck, PhoneCall } from 'lucide-react'
import { PolicyPage } from './Terms'

const privacyData = [
  {
    id: 'donor-info',
    heading: '1. Donor & Patient Information We Collect',
    icon: FileLock,
    shortText: 'Clinical and demographic records necessary for transfusion safety.',
    details: 'We collect relevant details including donor and patient full name, age, contact number, residential locality in Jaipur, ABO blood group, Rh factor, and basic medical screening indicators essential for pre-transfusion verification.'
  },
  {
    id: 'data-usage',
    heading: '2. Purpose of Data Processing',
    icon: Heart,
    shortText: 'Used exclusively for life-saving matches and emergency dispatch.',
    details: 'Collected records are used strictly to coordinate urgent blood requirements, verify cross-matching compatibility, communicate rapid donation requests during acute shortages, and maintain mandatory blood bank registers.'
  },
  {
    id: 'confidentiality',
    heading: '3. Clinical Data Confidentiality',
    icon: ShieldCheck,
    shortText: 'Strict compliance with medical confidentiality standards.',
    details: 'Individual donor screening outcomes, infectious marker testing reports, and patient health histories are treated as privileged clinical data. Test outcomes are never published or shared publicly under any circumstances.'
  },
  {
    id: 'data-security',
    heading: '4. Record Storage & System Security',
    icon: Database,
    shortText: 'Protected internal systems with zero commercial disclosure.',
    details: 'We maintain secure electronic registries and physical archives in compliance with statutory blood transfusion guidelines. We do not sell, lease, or distribute personal contact information to third-party marketing services.'
  },
  {
    id: 'donor-rights',
    heading: '5. Donor Consent & Communication Control',
    icon: UserCheck,
    shortText: 'Voluntary participation with the option to update alert preferences.',
    details: 'Registering as a voluntary donor is entirely consensual. Donors retain the choice to update contact availability, change relocation areas across Jaipur, or withdraw from voluntary call alerts at any time.'
  },
  {
    id: 'grievance',
    heading: '6. Privacy Inquiries & Coordination',
    icon: PhoneCall,
    shortText: 'Direct support from our Vaishali Nagar administrative desk.',
    details: 'For questions regarding data maintenance, donor registry verification, or privacy protocols, reach our administrative team at +91 9610940283 or visit the blood centre office at Chitrakoot, Vaishali Nagar, Jaipur.'
  }
]

export default function Privacy() {
  return <PolicyPage title="Privacy Policy & Medical Confidentiality" items={privacyData} />
}