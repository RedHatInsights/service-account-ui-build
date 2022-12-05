"use strict";(self.webpackChunksas_ui=self.webpackChunksas_ui||[]).push([[401],{26401:e=>{e.exports=JSON.parse('{"global_navigation":"Global navigation","global":"global","skip_to_content":"Skip to Content","go_to_kafka_instances":"Go to Kafka Instances","something_went_wrong":"Something went wrong","unexpected_error":"There was a problem processing the request. Please try again.","return_to_home_page":"Return to home page","404_page_does_not_exist":"404: That page doesn’t exist","we_cannot_find_the_page_you_are_looking_for":"We can’t find the page you’re looking for.","this_is_a_required_field":"This is a required field","create_a_kafka_instance":"Create a Kafka instance","instance_name":"Name","create_instance_name_helper_text":"Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - ).","cloud_provider":"Cloud provider","cloud_region":"Cloud region","availability_zones":"Availability zones","availability_zone_selection":"Availability zone selection","single":"Single","multi":"Multi","create_kafka_instance":"Create Kafka instance","submitting_request":"Submitting request","create_instance":"Create instance","cancel":"Cancel","instance_name_label":"Type <b>{{name}}</b> to confirm:","resources":"Resources","sample_code":"Sample code","topics":"Topics","consumer_groups":"Consumer groups","amazon_web_services":"Amazon Web Services","region":"Region","us_east_north_virginia":"US East, N. Virginia","id":"ID","owner":"Owner","created":"Created","updated":"Updated","basic_info":"Basic info","generate_credential_step1_title_description":"To connect securely to Red Hat OpenShift Streams for Apache Kafka, your application or tool needs an API key with permission to access the Kafka instance and resources such as topics.","credential_name_form_label":"Give the credential a name","credential_name_form_input_placeholder":"Enter your credential name","credential_aplication_reason_form_label":"What do you want your application to do?","produce_only":"Produce only","consume_only":"Consume only","produce_and_consume":"Produce and consume","produce_consume_and_create_topics":"Produce, consume and create topics","generate_credential_step2_title_description":"Choose which topics the credential can access","all_topics":"All topics","specific_topics":"Specific topics","topics_with_the":"Topics with the","lower_name":"name","lower_prefix":"prefix","enter_your_topic":"Enter your topic","credential_rule_popover_data":"This control is not functional for this prototype.","generate_credential_step3_title_description":"Choose which consumer groups the credential can access","all_consumer_groups":"All consumer groups","specific_consumer_groups":"Specific consumer groups","groups_with_the":"Groups with the","enter_your_consumer_group":"Enter your consumer group","generate_credential_step4_title_description":" Choose which transaction IDs the credential can access","no_transaction_ids":"No transaction IDs","all_transaction_ids":"All transaction IDs","transaction_ids_with_the":"Transaction IDs with the","enter_your_transaction_id":"Enter your transaction ID","credentials_successfully_generated":"Credentials successfully generated","connect_to_the_kafka_instance_using_this_clientID_and_secret":"Connect to the Kafka instance using this client ID and secret","create_service_account_credentials_warning_message":"Make a copy of the client ID and secret to store in a safe place. The client secret won\'t appear again after closing this screen.","client_id":"Client ID","client_id_confirmation_checkbox_label":"I have copied the client ID and secret","close":"Close","finish":"Finish","next":"Next","topics_access":"Topics access","consumer_groups_access":"Consumer groups access","transaction_ids_access":"Transaction IDs access","create_credential_wizard_description":"Generate credential for your application","details":"Details","connection":"Connection","drawer_resource_tab_body_description_1":"Your application or tool initially connects to the Kafka instance using the bootstrap server and authenticates with your service accounts credentials.","kafka_listener_and_credentials":"Kafka listener and credentials","drawer_resource_tab_body_description_2":"Your application or tool initially connects to the Kafka instance using the bootstrap server and authenticates with your service account credentials. These credentials can be used with an OAuth Client Credential Grant or as the username and password for SASL/Plain.","bootstrap_server":"Bootstrap server","drawer_resource_tab_body_description_3":"Applications and tools that use the REST producer API will need the REST producer endpoint to connect.","sample_connection_code":"Sample connection code","drawer_code_section_tab_body_description_1":"Use this snippet of code to set the properties in your Kafka client to connect securely. Replace the values in","brackets":"brackets","topic_partitions":"Topic Partitions","topic_partitions_offline":"Offline","topic_partitions_online":"Online","take_me_home":"Take me home","404_page_not_found":"404 Page not found","we_did_not_find_a_page_that_matches_the_address_you_navigated_to":"We didn\'t find a page that matches the address you navigated to.","openshift_streams":"OpenShift Streams","creation_pending":"Creation pending","delete":"Delete","delete_instance_status_complete":"<b>{{instanceName}}</b> will be deleted.","delete_instance_status_accepted_or_provisioning":"<b>{{instanceName}}</b> will be deleted.","name":"Name","status":"Status","time_created":"Time created","kafka_successfully_deleted":"{{name}} Kafka instance deleted","kafka_successfully_created":"Kafka instance ready","kafka_success_message":"You can now create topics for the <b>{{name}}</b> Kafka instance.","kafka_not_created":"Kafka instance creation failed","kafka_failed_message":"The creation of the <b>{{name}}</b> Kafka instance is failed","no_permission_to_delete_kafka":"Organization administrators and the Kafka instance owner can delete this instance.","no_permission_to_view_kafka":"Ask the Kafka instance owner for the details.","no_permission_to_connect_kafka":"Ask the Kafka instance owner for connection information.","no_permission_to_change_owner":"Organization administrators and the Kafka instance owner can change the owner of an instance.","view_details":"Details","view_connection_information":"Connection","ago":"ago","cluster_instance_list":"Cluster instance list","no_results_found":"No results found","adjust_your_filters_and_try_again":"Adjust your filters and try again.","full_pagination":"Full pagination","per_page_suffix":"per page","to_first_page":"Go to first page","to_previous_page":"Go to previous page","to_last_page":"Go to last page","to_next_page":"Go to next page","options_toggle":"Items per page","curr_page":"Current page","max_filter_message":"Maximum number of filters reached. Clear a filter before adding another.","input_field_invalid_message":"Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - ).","owner_field_invalid_message":"Red Hat Login ID cannot contain spaces, national characters or the following special characters \\" $ ^ < > | + % / ; : , * = ~ # ( )","filter_by_name_lower":"Filter by name","filter_by_cloud_provider":"Filter by cloud provider","filter_by_region":"Filter by region","filter_by_owner":"Filter by owner","filter_by_status":"Filter by status","minimal_pagination":"Minimal pagination","access_permissions_needed":"Access permissions needed","kafka_instances":"Kafka Instances","no_kafka_instances_yet":"No Kafka instances","create_a_kafka_instance_to_get_started":"For help getting started, access the <0>quick start guide.<0>","delete_instance_modal":"delete_instance_modal","mock_ui":"Mock UI","currently_supported_ui":"Currently supported UI","ready":"Ready","creation_in_progress":"Creation in progress","aws":"Amazon Web Services","us-east-1":"US East, N. Virginia","Global":"Global","kafka_creation_accepted":"Kafka creation accepted","filter_by":"Filter by","generate_new_credential":"Generate new credential","delete_instance_modalv":"Delete instance modal","connect_to_this_instance":"Connect to this instance","KAFKAS-MGMT-8":"name does not match ^[a-z]([-a-z0-9]*[a-z0-9])?$","MANAGED-SERVICES-API-401":"Bearer token is malformed","OCM-EX-103":"Synchronous action (creating kafka requests) is unsupported, use async=true parameter","GATEWAY-404":"The requested resource doesn\'t exist","KAFKAS-MGMT-4":"User {{user}} is not authorized to access the service.","select_region":"Select region","filter_by_status_lower":"Filter by status","australiacentral":"Australia Central","australiacentral2":"Australia Central 2","australiaeast":"Australia East","australiasoutheast":"Australia Southeast","brazilsouth":"Brazil South","canadacentral":"Canada Central","canadaeast":"Canada East","centralus":"Central US","eastasia":"East Asia","eastus":"East US","eastus2":"East US 2","francecentral":"France Central","francesouth":"France South","germanynorth":"Germany North","germanywestcentral":"Germany West Central","japaneast":"Japan East","japanwest":"Japan West","koreacentral":"Korea Central","koreasouth":"Korea South","northcentralus":"North Central US","northeurope":"North Europe","southafricanorth":"South Africa North","southafricawest":"South Africa West","southcentralus":"South Central US","southeastasia":"Southeast Asia","southindia":"South India","uaecentral":"UAE Central","uaenorth":"UAE North","uksouth":"UK South","ukwest":"UK West","westcentralus":"West Central US","westeurope":"West Europe","westindia":"West India","westus":"West US","westus2":"West US 2","asia-east1":"Changhua County, Taiwan","asia-east2":"Hong Kong","asia-northeast1":"Tokyo, Japan","asia-northeast2":"Osaka, Japan","asia-northeast3":"Seoul, Korea","asia-south1":"Mumbai, India","asia-southeast1":"Jurong West, Singapore","asia-southeast2":"Jakarta, Indonesia","australia-southeast1":"Sydney, Australia","europe-north1":"Hamina, Finland","europe-west1":"St. Ghislain, Belgium","europe-west2":"London, England, UK","europe-west3":"Frankfurt, Germany","europe-west4":"Eemshaven, Netherlands","europe-west6":"Zürich, Switzerland","northamerica-northeast1":"Montréal, Québec, Canada","southamerica-east1":"Osasco (São Paulo), Brazil","us-central1":"Council Bluffs, Iowa, USA","us-east1":"Moncks Corner, South Carolina, USA","us-east4":"Ashburn, Northern Virginia, USA","us-west1":"The Dalles, Oregon, USA","us-west2":"Los Angeles, California, USA","us-west3":"Salt Lake City, Utah, USA","us-west4":"Las Vegas, Nevada, USA","ap-northeast-1":"Asia Pacific, Tokyo","ap-northeast-2":"Asia Pacific, Seoul","ap-south-1":"Asia Pacific, Mumbai","ap-southeast-1":"Asia Pacific, Singapore","ap-southeast-2":"Asia Pacific, Sydney","ca-central-1":"Canada, Central","eu-central-1":"EU, Frankfurt","eu-north-1":"EU, Stockholm","eu-west-1":"EU, Ireland","eu-west-2":"EU, London","eu-west-3":"EU, Paris","me-south-1":"Middle East, Bahrain","sa-east-1":"South America, São Paulo","us-east-2":"US East, Ohio","us-west-1":"US West, N. California","us-west-2":"US West, Oregon","azure":"Microsoft Azure","baremetal":"Bare Metal","gcp":"Google Cloud Platform","libvirt":"Libvirt","openstack":"OpenStack","vsphere":"VSphere","complete":"Ready","failed":"Failed","accepted":"Creation pending","provisioning":"Creation in progress","preparing":"Creation in progress","completed":"Ready","deprovision":"Deleting","deleting":"Deleting","you_do_not_have_access_to_openshift_streams":"You do not have access to OpenShift Streams","length_is_greater_than_expected":"Cannot exceed {{maxLength}} characters","the_name_already_exists_please_enter_a_unique_name":"{{name}} already exists. Try a different name.","clear_all_filters":"Clear all filters","delete_instance":"Delete","change_owner":"Change owner","current_owner_name":"Current owner","new_owner_name":"New Owner","to_access_kafka_instances_contact_your_organization_administrators":"To access Kafka Instances, contact your organization administrators.","access_the_quick_start_guide":"Access the quick start guide","take_a_tour":"Take a tour","kafka_instance_not_ready_inline_message":"We\'re creating your Kafka instance, so some details aren\'t yet available.","bootstrap_server_description":"Establish the initial connection between your client and Kafka instance.","more_info_about_sasl_oauthbearer":"More information about SASL/OAUTHBEARER","standard_kafka_alert_title":"Kafka Instances are unavailable for creation","standard_kafka_alert_message":"Your organization reached the limit of Kafka instances available for creation.","no_quota_kafka_alert_title":"Kafka Instances are unavailable for creation","no_quota_kafka_alert_message":"Kafka instances might become available later, so check back in a few hours.","ams_service_down_message":"We are unable to create a new Kafka instance at this time. Try again later.","instance_checking_message":"Checking if new Kafka instances are available","trial_kafka_title":"You already have an instance running","trial_kafka_message":"You can deploy 1 instance at a time. To deploy a new instance, delete your existing one first.","kafka_creation_failed_alert_title":"Kafka instance can\'t be created","standard_kafka_creation_failed_alert_message":"Your organization reached the limit of kafka instances available for creation.","trial_kafka_creation_failed_alert_message":"Kafka instances are no longer available. Try again in a few hours.","deploy_one_instance_alert_message":"You can deploy 1 instance at a time. To deploy a new instance, delete your existing one first.","trial_quota_kafka_title":"Your instance will expire after 48 hours.","owner_change_sucess_title":"Kafka instance owner changed","owner_change_sucess_message":"{{newOwner}} is now the owner of the {{name}} Kafka instance.","new_owner_does_not_exist_title":"New owner doesn’t exist","new_owner_does_not_exist_message":"A user with the user ID {{newOwner}} doesn’t exist in your organization.","can_not_change_owner_title":"Cannot change owner","onwer_transfer_failed_message":"We\'re unable to change the owner of {{name}} at this time. Try again later.","select_user_account":"Select user account","kafkaInstance":{"availabilty_zones_tooltip_message":"At this time, only multi availability zones are available."},"common":{"loding":"Loading","java":"JAVA","mvn":"MVN","cli":"CLI","curl":"CURL","client_key":"Client Key","client_secret":"Client secret","resources":"Resources","sample_code":"Sample code","copy_clipboard":"Copy to clipboard","copy_clipboard_successfully":"Successfully copied to clipboard!","name":"Description","owner":"Owner","reset_credentials":"Reset credentials","cancel":"Cancel","submitting_request":"Submitting request","this_is_a_required_field":"Required","form_invalid_alert":"Address form errors to proceed.","something_went_wrong":"Something went wrong","clientID":"Client ID","input_filed_invalid_helper_text":"Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - ).","instance_information":"Instance information","duration":"Duration","duration_value":"48 hours","ingress_egress":"Ingress/Egress","ingress_egress_value":"up to 30 MiB/second each","storage_value":"up to 1000 GiB","message_size":"Message size","message_size_value":"up to 1 MiB","storage":"Storage","partitions":"Partitions","partitions_value":"up to 500","client_connections":"Client connections","client_connections_value":"up to 500","connection_rate":"Connection rate","connection_rate_value":"up to 100 connections/second","quick_start_guide_message":"Need help getting started? Follow our quick start guide.","page":"page","authentication_method":"Authentication method","sasl_oauthbearer":"SASL/OAUTHBEARER","recommended":"Recommended","token_endpoint_url":"Token endpoint URL","sasl_plain":"SASL/PLAIN","48_hours_duration":"48 hours duration","change_owner":"Change owner","use":"Use"},"serviceAccount":{"service_accounts":"Service Accounts","service_accounts_small":"Service accounts","service_accounts_title_header_info":"Use service accounts to connect and authenticate your applications with Kafka instances and Service Registry instances.","no_permission_to_delete_service_account":"Ask the service account owner to delete this account.","no_permission_to_reset_service_account":"Ask the service account owner to reset credentials.","delete_service_account":"Delete service account","service_account_list":"Service account list","create_service_account":"Create service account","you_do_not_have_any_service_accounts_yet":"No service accounts yet","create_service_account_to_get_started":"To get started, create a service account.","unauthorized_access_to_service_accounts_title":"Access permissions needed","unauthorized_access_to_service_accounts_info":"To access Service Accounts, contact your organization administrators.","client_secret_will_be_reset":"Client secret for <b>{{serviceAccountId}}</b> with client ID <b>{{client_id}}</b> will be reset.","reset":"Reset","reset_service_account_credentials":"Reset service account credentials","create_a_service_account":"Create a service account","service_account_creation_success_message":"Service account created","will_be_deleted":"will be deleted.","service_account_name_length_is_greater_than_expected":"Cannot exceed {{maxLength}} characters.","service_account_description_length_is_greater_than_expected":"Cannot exceed {{maxLength}} characters.","service_account_successfully_deleted":"{{name}} service account deleted","create_service_account_to_generate_credentials":"Create a service account to generate credentials. Manage the service accounts you create on the","sasl_oauthbearer_popover_content":"OpenShift Streams for Apache Kafka uses the industry-standard OAuth protocol via the SASL/OAUTHBEARER provided by Apache Kafka.","sasl_oauthbearer_description":"Use your service account credentials and a token endpoint URL to authenticate your client with the Kafka instance.","sasl_plain_popover_content":"Explanation that this is available for tools that do not support the Oauth method.","sasl_plain_description":" Use your service account credentials (Client ID and Client secret) as the user name and password to authenticate your client with the Kafka instance.","short_description":"Short description","short_description_popover_button":"Short description help","short_description_popover_title":"Short description","short_description_popover_body":"The short description is the same as the client name in the underlying OAuth system.","current_instance":"Accounts do not have access to this instance unless granted under the instance’s","access_tab":"Access tab.","alter_allow":"The owner, the organization administrator, or users with the Allow Alter permission on this instance can manage access.","Service Accounts":"Service Accounts"}}')}}]);