/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","username","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"uploadAvatar":{"verb":"POST","url":"/api/v1/user/upload-avatar","args":["avatar"]},"getAvatar":{"verb":"GET","url":"/api/v1/user/:id/avatar/","args":["id"]},"createMyGroup":{"verb":"POST","url":"/api/v1/group/create-my-group","args":["name","emailAddress"]},"destroyMyGroup":{"verb":"DELETE","url":"/api/v1/group/destroy-my-group","args":["id"]},"createMeeting":{"verb":"POST","url":"/api/v1/group/create-meeting","args":["date","assembly"]},"destroyMeeting":{"verb":"DELETE","url":"/api/v1/group/destroy-meeting","args":["id"]},"removeComrade":{"verb":"DELETE","url":"/api/v1/comrades/:id","args":["id"]},"addComrades":{"verb":"POST","url":"/api/v1/comrades","args":["comrades"]},"approveComrade":{"verb":"PUT","url":"/api/v1/approve-comrade","args":["id"]}}
  /* eslint-enable */

});
