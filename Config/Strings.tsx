import {I18nManager} from 'react-native';

const dict = {
  signinToChat: {
    en: 'Signin so you can participate in chat',
    ar: 'سجل الدخول حتى تتمكن من المشاركة في الشات',
  },
  stepsToSignin: {
    en: "Go to settings page and signin. If you don't have an account yet, you have to click on the link below and signup for an account",
    ar: 'اذهب الى صفحة الاعدادات وقم بتسجيل الدخول. إذا لم يكن لديك حساب بعد، فعليك النقر فوق الرابط أدناه والتسجيل للحصول على حساب ',
  },
  whySignin: {
    en: 'Signin so you can participate in chat and follow your favorite streamers',
    ar: 'سجل الدخول حتى تشارك في الشات مع المتابعين الاخرين وتتابع الستريمرز المفضلين لديك',
  },
  close: {
    en: 'Close',
    ar: 'اغلق',
  },
  signinButton: {
    en: 'Sign in',
    ar: 'تسجيل الدخول',
  },
  wrongUsername: {
    en: 'Username not found',
    ar: 'اسم المستخدم خاطئ',
  },
  wrongPassword: {
    en: 'Password is incorrect',
    ar: 'كلمة المرور غير صحيحة',
  },
  unknownIssue: {
    en: 'There was an issue, try one more time',
    ar: 'حدثت مشكلة ، حاول مرة أخرى',
  },
  signupButton: {
    en: 'Sign up',
    ar: 'إنشاء حساب',
  },
  username: {
    en: 'Username',
    ar: 'اسم المستخدم',
  },
  email: {
    en: 'Email',
    ar: 'البريد الالكتروني',
  },
  password: {
    en: 'Password',
    ar: 'كلمة المرور',
  },
  browseIconStatusBar: {
    en: 'Browse',
    ar: 'تصفح',
  },
  lvl: {
    en: 'Lvl.',
    ar: 'المستوى',
  },
  xp: {
    en: 'XP',
    ar: 'نقاط خبرة',
  },
  quests: {
    en: 'Quests',
    ar: 'المهام',
  },
  standings: {
    en: 'Standings',
    ar: 'الترتيب',
  },
  history: {
    en: 'History',
    ar: 'التاريخ',
  },
  yourClaimHistory: {
    en: 'Your Claim History',
    ar: 'سجل الطلبات الخاص بك',
  },
  followingIconStatusBar: {
    en: 'Following',
    ar: 'الستريمرز المفضلين',
  },
  settingsIconStatusBar: {
    en: 'Settings',
    ar: 'الإعدادات',
  },
  logout: {
    en: 'Logout',
    ar: 'تسجيل الخروج',
  },
  logoutConfirmationTitle: {
    en: 'Are you sure?',
    ar: 'هل أنت متأكد؟',
  },
  logoutConfirmationMsg: {
    en: 'Are you sure you want to logout?',
    ar: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
  },
  deleteAccountconfirmationMsg: {
    en: 'Are you sure you want to delete your account and lose all your progress, liked clips and favorited games?',
    ar: 'هل أنت متأكد أنك تريد حذف حسابك وفقدان كل ما أحرزته من تقدم ، والمقاطع التي أعجبتك والألعاب المفضلة؟',
  },
  deleteAccountSuccess: {
    en: 'Your account has been successfully deleted.',
    ar: 'تم حذف حسابك بنجاح',
  },
  account: {
    en: 'Account',
    ar: 'الحساب',
  },
  settingsSelectLanguage: {
    en: 'App Language',
    ar: 'لغة التطبيق',
  },
  changeLanguageConfirmationTitle: {
    en: 'Language Change',
    ar: 'تغيير اللغة',
  },
  changeLanguageConfirmationMsg: {
    en: 'Are you sure you want to switch the language? doing so will restart the app',
    ar: 'هل أنت متأكد أنك تريد تبديل اللغة؟ سيؤدي القيام بذلك إلى إعادة تشغيل التطبيق',
  },
  cancel: {
    en: 'Cancel',
    ar: 'إلغاء',
  },
  ok: {
    en: 'Ok',
    ar: 'نعم',
  },
  live: {
    en: 'LIVE',
    ar: 'مباشر',
  },
  chatBoxPlaceHolder: {
    en: 'Send a message',
    ar: 'أرسل رسالة',
  },
  chatBoxPlaceHolderDisconnection: {
    en: 'connecting to chat...',
    ar: 'انقطع الاتصال بالمحادثة ، وجارٍ إعادة الاتصال ..',
  },
  streamChat: {
    en: 'Stream Chat',
    ar: 'الشات',
  },
  viewers: {
    en: 'viewers',
    ar: 'مشاهدين',
  },
  views: {
    en: 'views',
    ar: 'مشاهدة',
  },
  viewsCapital: {
    en: 'Views',
    ar: 'مشاهدة',
  },
  warning: {
    en: 'Warning',
    ar: 'تحذير',
  },
  spamMessageWarning: {
    en: "We noticed you are trying to send too many messages too fast. The last message wasn't delivered",
    ar: 'لقد لاحظنا أنك تحاول إرسال عدد كبير من الرسائل بسرعة كبيرة جدًا. لم يتم إرسال الرسالة الأخيرة',
  },
  memeLimitWarning: {
    en: "You can't send more than 1 meme in a single message",
    ar: 'لا يمكنك إرسال أكثر من 1 ميم في رسالة واحدة',
  },
  watchingNow: {
    en: 'watching now',
    ar: 'يشاهدون الآن',
  },
  topLiveStreams: {
    en: 'Top Live Streams',
    ar: 'أفضل البثوث المباشرة',
  },
  clickToMention: {
    en: 'You can now click on usernames to mention',
    ar: 'يمكنك الآن النقر فوق أسماء المستخدمين لذكرهم',
  },
  search: {
    en: 'Search',
    ar: 'ابحث',
  },
  follow: {
    en: 'Follow',
    ar: 'تابِع',
  },
  following: {
    en: 'Following',
    ar: 'متابٌع',
  },
  unfollow: {
    en: 'Unfollow',
    ar: 'إلغاء المتابعة',
  },
  unfollowConfirmationTitle: {
    en: 'Unfollow',
    ar: 'إلغاء المتابعة',
  },
  unfollowConfirmationMsg: {
    en: 'Are you sure you want to unfollow',
    ar: 'هل أنت متأكد أنك تريد إلغاء متابعة',
  },
  followers: {
    en: 'Followers',
    ar: 'متابِعين',
  },
  subscribe: {
    en: 'Subscribe',
    ar: 'الدعم',
  },
  selectQuality: {
    en: 'Select Quality',
    ar: 'إختر الجودة',
  },
  subsribeComingSoon: {
    en: 'Subscribing & Donating is coming soon',
    ar: 'الدعم المادي للستريمرز سيكون متاحا قريبا',
  },
  resetPassword: {
    en: 'Reset password',
    ar: 'اعادة تعيين كلمة المرور',
  },
  usernameOrEmail: {
    en: 'Username or Email',
    ar: 'اسم المستخدم او البريد الالكتروني',
  },
  emailNotExist: {
    en: `account with that email doesn't exist`,
    ar: 'لا يوجد حساب بهذا البريد الالكتروني',
  },
  emailSent: {
    en: 'Email was sent',
    ar: 'تم ارسال البريد الالكتروني',
  },
  forgotPassword: {
    en: 'Forgot password',
    ar: 'نسيت كلمة المرور',
  },
  signupIfNotAUser: {
    en: "Don't have an account?",
    ar: 'ليس لديك حساب؟',
  },

  notificationIgnore: {
    en: 'Close',
    ar: 'اغلق',
  },
  notificationOpen: {
    en: 'Open',
    ar: 'افتح',
  },
  streamerReportSubmitted: {
    en: 'Report has been submitted',
    ar: 'تم إرسال البلاغ',
  },
  streamerReportAction: {
    en: 'Report for inappropriate content',
    ar: 'الإبلاغ عن محتوى غير لائق',
  },
  streamReportActionFootnote: {
    en: 'After submitting a report, our team will look into it and take the stream down if it violates our Terms of Services',
    ar: 'بعد إرسال البلاغ ، سينظر فريقنا في الأمر ويزيل البث إذا كان ينتهك شروط الخدمة الخاصة بنا',
  },
  submit: {
    en: 'Submit',
    ar: 'إرسال',
  },
  dailyQuests: {
    en: 'Daily Quests',
    ar: 'المهام اليومية',
  },
  allQuests: {
    en: 'All Quests',
    ar: 'كل المهام',
  },
  weeklyQuests: {
    en: 'Weekly Quests',
    ar: 'المهام الاسبوعية',
  },
  monthlyQuests: {
    en: 'Monthly Quests',
    ar: 'المهام الشهرية',
  },
  hourlyQuests: {
    en: 'Hourly Quests',
    ar: 'مهام كل ساعة',
  },
  points: {
    en: 'Points',
    ar: 'نقطة',
  },
  level: {
    en: 'Level',
    ar: 'مستوى',
  },
  available: {
    en: 'Available',
    ar: 'متاح',
  },
  notEligible: {
    en: 'You are not eligible to receive this reward',
    ar: 'لست مؤهلاً لاستلام هذه الجائزة',
  },
  allDailyQuestsMessage: {
    en: 'Quests will reset',
    ar: 'سيتم إعادة تعيين المهام',
  },
  signInAndPlay: {
    en: 'Sign in and start completing quests to earn points and get rewards',
    ar: 'سجل الدخول وابدأ في إكمال المهام لكسب النقاط والحصول على الجوائز',
  },
  notLoggedInQuestsMessage: {
    en: 'You need to be logged in to start quests',
    ar: 'يجب أن تكون مسجلاً لبدء المهام',
  },
  noQuests: {
    en: 'No quests available',
    ar: 'لا توجد مهام متاحة',
  },
  pleaseEnterPhone: {
    en: 'Please enter your information so we can send you the reward.',
    ar: 'يرجى إدخال معلوماتك لنتمكن من إرسال الجائزة لك.',
  },
  rewardReachOutNote: {
    en: 'You will get your reward or we will reach out to you within 1 week.',
    ar: 'سوف تحصل على الجائزة أو سنتصل بك خلال أسبوع واحد.',
  },
  phone: {
    en: 'Phone number',
    ar: 'رقم الهاتف',
  },
  streamerBlockSubmitted: {
    en: 'Streamer is now blocked',
    ar: 'تم حظر الستريمر',
  },
  streamerBlockAction: {
    en: 'Block',
    ar: 'حظر',
  },
  streamBlockActionFootnote: {
    en: 'Blocking a streamer will prevent you from seeing any live streams from them, getting notifications when they go live or following them',
    ar: 'سيمنعك حظر الستريمر من رؤية أي بث مباشر منه/ها ، أو تلقي إشعارات عندما يبدأ البث المباشر أو التفاعل معه/ها',
  },
  streamerBlockConfirmationTitle: {
    en: 'Are you sure you want to block',
    ar: 'هل أنت متأكد أنك تريد حظر',
  },
  streamerBlockConfirmationMsg: {
    en: 'Blocking a streamer will prevent you from seeing any live streams from them, getting notifications when they go live or following them',
    ar: 'سيمنعك حظر الستريمر من رؤية أي بث مباشر منه/ها ، أو تلقي إشعارات عندما يبدأ البث المباشر أو التفاعل معه/ها',
  },
  streamerBlockConfirmationSubMsg: {
    en: 'You can manage your block list from Settings at any time',
    ar: 'يمكنك إدارة قائمة الحظر الخاصة بك من الإعدادات في أي وقت',
  },
  blockList: {
    en: 'Block List',
    ar: 'قائمة الحظر',
  },
  unblock: {
    en: 'Unblock',
    ar: 'إلغاء الحظر',
  },
  signinToTakeThisAction: {
    en: 'This action requires you to Signin',
    ar: 'هذا الإجراء يتطلب منك تسجيل الدخول',
  },
  updateButton: {
    en: 'Update',
    ar: 'تحديث',
  },
  updateAvailableTitle: {
    en: 'Please Update Heros',
    ar: 'الرجاء تحديث Heros',
  },
  updateAvailableText: {
    en: "There's a new version of the app with new features and fixes",
    ar: 'هناك إصدار جديد من التطبيق به مميزات وإصلاحات جديدة',
  },
  forceUpdateText: {
    en: 'You have to update in order to continue using the app',
    ar: 'يجب عليك التحديث من أجل الاستمرار في استخدام التطبيق',
  },
  male: {
    en: 'Male',
    ar: 'ذكر',
  },
  female: {
    en: 'Female',
    ar: 'انثى',
  },
  gender: {
    en: 'Gender',
    ar: 'النوع',
  },
  dob: {
    en: 'Date of Birth',
    ar: 'تاريخ الميلاد',
  },
  optional: {
    en: 'optional',
    ar: 'اختياري',
  },
  usernameTaken: {
    en: 'This username is taken',
    ar: 'اسم المستخدم هذا غير متوفر يرجى المحاولة مرة أخرى',
  },
  emailTaken: {
    en: 'Email linked to this account is taken',
    ar: 'البريد الإلكتروني المرتبط بهذا الحساب مستخدم في حساب اخر',
  },
  invalidUsername: {
    en: 'You can only use letters, numbers or _ in your username',
    ar: 'يمكنك فقط استخدام الأحرف والأرقام أو _ في اسم المستخدم الخاص بك',
  },
  usernameLength: {
    en: 'Username must be at least 3 characters long and max 16',
    ar: 'يجب أن يتكون اسم المستخدم من 3 أحرف على الأقل ولا يزيد عن 16 حرفًا',
  },
  loginWithFacebook: {
    en: 'Sign in with Facebook',
    ar: 'تسجيل الدخول باستخدام فيسبوك',
  },
  loginWithGoogle: {
    en: 'Sign in with Google',
    ar: 'تسجيل الدخول باستخدام جوجل',
  },
  loginWithApple: {
    en: 'Sign in with Apple',
    ar: 'تسجيل الدخول باستخدام ابل',
  },
  autoScrollOff: {
    en: 'most recent messages',
    ar: 'انتقل إلى أحدث الرسائل',
  },
  pastStreams: {
    en: 'Past Streams',
    ar: 'البثوث الماضية',
  },
  disabledChat: {
    en: 'Chat is disabled',
    ar: 'الشات غير متاح حاليا',
  },
  latestRecordedStreams: {
    en: 'Latest Recorded Streams',
    ar: 'أحدث البثوث المسجلة',
  },
  recordedStreams: {
    en: 'Recorded Streams',
    ar: 'البثوث المسجلة',
  },
  disableChat: {
    en: 'Disable Chat',
    ar: 'ايقاف الشات',
  },
  enableChat: {
    en: 'Enable Chat',
    ar: 'تشغيل الشات',
  },
  disableGifs: {
    en: 'Disable GIFs',
    ar: 'ايقاف الصور المتحركة',
  },
  enableGifs: {
    en: 'Enable GIFs',
    ar: 'تشغيل الصور المتحركة',
  },
  messageDeletedByMod: {
    en: 'Message was deleted by a moderator',
    ar: 'تم حذف الرسالة من قبل الادمن',
  },
  errorFallbackText: {
    en: 'Something went wrong, our team is working hard to fix this issue right now. Please click the button below to get back to what you were doing.',
    ar: 'حدث خطأ ما ، يعمل فريقنا بجد لإصلاح هذه المشكلة في الوقت الحالي. الرجاء النقر فوق الزر أدناه للعودة إلى ما كنت تفعله.',
  },
  errorFallbackHeader: {
    en: 'Sorry!',
    ar: 'عذرا!',
  },
  sorry: {
    en: 'Sorry!',
    ar: 'عذرا!',
  },
  tryAgain: {
    en: 'Try again',
    ar: 'حاول مرة اخرى',
  },
  noActiveStreams: {
    en: 'Sorry, there are no live streams at the moment. Check the latest Recorded Streams',
    ar: 'عذرا، لا يوجد بثوث مباشرة الان، يمكنك تصفح البثوث المسجلة',
  },
  noVods: {
    en: 'Sorry, there are no recorded past streams at the moment.',
    ar: 'عذرا ، لا توجد بثوث سابقة مسجلة في الوقت الحالي.',
  },
  noMemes: {
    en: 'Loading failed, click below to reload',
    ar: 'فشل في تنزيل الميمز، اضغط ادناه لاعادة التحميل',
  },
  orLoginWithUsername: {
    en: 'or login with username',
    ar: 'أو سجل الدخول باسم المستخدم',
  },
  share: {
    en: 'Share',
    ar: 'شارك',
  },
  seeMore: {
    en: 'See More',
    ar: 'عرض المزيد',
  },
  seeLess: {
    en: 'See Less',
    ar: 'عرض أقل',
  },
  fullScreen: {
    en: 'Full Screen',
    ar: 'تكبير',
  },
  comments: {
    en: 'comments',
    ar: 'تعليقات',
  },
  addComment: {
    en: 'Add Comment',
    ar: 'أضف تعليق',
  },
  somethingWentWrong: {
    en: 'Something went wrong, please try again',
    ar: 'حدث خطأ ما، الرجاء المحاولة مرة أخرى',
  },
  error: {
    en: 'Error',
    ar: 'خطأ',
  },
  profilePicSizeTooBig: {
    en: 'File size is too big, max size is 3MB',
    ar: 'حجم الملف كبير جداً, الحجم الأقصى 3 ميجا',
  },
  noInternetConnection: {
    en: 'No internet connection',
    ar: 'لا يوجد اتصال بالإنترنت',
  },
  endOfClipsMessage: {
    en: "You've seen all clips we have so far 👏 👏, new clips will be available soon. In the meantime, you can click on the button below to re-watch clips.",
    ar: 'لقد شاهدت كل المقاطع الموجودة حتى الآن 👏 👏, مقاطع جديدة ستصبح متاحة قريبا. يمكنك النقر فوق الزر أدناه لإعادة تشغيل المقاطع التي شاهدتها.',
  },
  rewatchClips: {
    en: 'Re-watch Clips',
    ar: 'إعادة تشغيل المقاطع',
  },
  firstToComment: {
    en: 'Be the first to comment and collect',
    ar: 'كن أول من يعلق وجمع الـ',
  },
  save: {
    en: 'Save',
    ar: 'حفظ',
  },
  later: {
    en: 'Later',
    ar: 'في وقت لاحق',
  },
  followCategoryHeader: {
    en: "Follow games you're interested in to get tailored content for you!",
    ar: 'تابع الألعاب التي تهتم بها لتحصل على محتوى مخصص لك!',
  },
  followGamesTitle: {
    en: 'Follow Your Favorite Games',
    ar: 'تابع العابك المفضلة',
  },
  favorityGames: {
    en: 'Favorite Games',
    ar: 'العابك المفضلة',
  },
  fires: {
    en: 'Fires',
    ar: 'فاير',
  },
  clips: {
    en: 'Clips',
    ar: 'كليبات',
  },
  noContent: {
    en: 'Sorry, there is no content available in this section at the moment.',
    ar: 'عذرا، لا يوجد محتوى متاح في هذا القسم في الوقت الحالي.',
  },
  deleteAccount: {
    en: 'Delete Account',
    ar: 'حذف الحساب',
  },
  success: {
    en: 'Success',
    ar: 'تم بنجاح',
  },
  name: {
    en: 'Name',
    ar: 'الاسم',
  },
  minimumLevel: {
    en: 'Minimum Level',
    ar: 'المستوى الأدنى',
  },
  cost: {
    en: 'Cost',
    ar: 'التكلفة',
  },
  rewardCenter: {
    en: 'Rewards',
    ar: 'الجوائز',
  },
  rewards: {
    en: 'Rewards',
    ar: 'الجوائز',
  },
  claim: {
    en: 'Claim',
    ar: 'استلم',
  },
  outOfStock: {
    en: 'Out of Stock',
    ar: 'نفذت الكمية',
  },
  minLevelForReward: {
    en: 'You need to reach level {level} to claim this reward',
    ar: 'يجب أن تصل إلى المستوى {level} لتتمكن من استلام هذه الجائزة',
  },
  minPointsForReward: {
    en: 'You need to reach {points} points to claim this reward',
    ar: 'يجب أن تصل إلى {points} نقطة لتتمكن من استلام هذه الجائزة',
  },
  rewardNoAvailableUnits: {
    en: "Sorry, there're no available units for this reward anymore. All of them have been redeemed by other people.",
    ar: 'عذرا، لا يوجد وحدات متاحة لهذه الجائزة بعد الآن. تم استبدال جميعها بواسطة أشخاص آخرين.',
  },
  pointsIconClickTitle: {
    en: 'Your earned points',
    ar: 'نقاطك المكتسبة',
  },
  pointsIconClickDesc: {
    en:
      'These are points that you can earn by completing hourly, daily, weekly and monthly quests.' +
      'You can then use these points to redeem rewards and benefits from the rewards center',
    ar: 'هذه النقاط التي يمكنك جمعها من خلال إكمال المهام اليومية والأسبوعية والشهرية. يمكنك استخدام هذه النقاط لاسترداد الجوائز والمميزات من مركز الجوائز',
  },
  rewardOnlyOncePerWeek: {
    en: 'You can only redeem this reward once per week',
    ar: 'يمكنك استلام هذه الجائزة مرة واحدة فقط في الأسبوع',
  },
  rewardClaimIsPending: {
    en: 'You have already requested to redeem this reward. Please wait for the delivery to be completed',
    ar: 'لقد طلبت بالفعل استلام هذه الجائزة. يرجى الانتظار حتى يتم إكمال التسليم',
  },
  rewardClaimSubmittedSuccessfully: {
    en: 'Your request to redeem this reward has been submitted successfully',
    ar: 'تم إرسال طلبك لاستلام هذه الجائزة بنجاح',
  },
  rewardAvailabilityNote: {
    en: 'Please note that we have a limited number of units for each reward and once you and other users have claimed all units for a reward, you cannot claim that reward even if you have the points, until Heros refills them.',
    ar: 'يرجى ملاحظة أن لدينا عدد محدود من الوحدات لكل جائزة وبمجرد استلام كل الوحدات لجائزة معينة من قبل جميع المستخدمين الاخرين، لن تتمكن من طلب استلام هذه الجائزة حتى لو كان لديك النقاط اللازمة، حتى يعيد Heros تعبئتها',
  },
  noClaimsYet: {
    en: `You haven't claimed a reward yet, Go and claim one now!`,
    ar: `لم تطلب أي جائزة حتى الآن, اذهب واحصل على جائزة الآن!`,
  },
  details: {
    en: 'Details',
    ar: 'التفاصيل',
  },
  dateClaimed: {
    en: 'Date Claimed',
    ar: 'تاريخ الطلب',
  },
  lastUpdate: {
    en: 'Last Update',
    ar: 'آخر تحديث',
  },
  pending: {
    en: 'pending',
    ar: 'قيد الانتظار',
  },
  approved: {
    en: 'approved',
    ar: 'مقبول',
  },
  rejected: {
    en: 'rejected',
    ar: 'مرفوض',
  },
  moreInfo: {
    en: 'more info',
    ar: 'معلومات',
  },
  referralLink: {
    en: 'Referral Link',
    ar: 'ريفيرال',
  },
  referralLinkDesc: {
    en: 'Get your friends to signup using your referral link for a chance to win points when they level up.',
    ar: 'خلي صحابك يسجلو على هيروز من اللينك ده عشان تاخد فرصة انك تكسب نقاط لما ليفل اكونتاتهم يعلى',
  },
  copied: {
    en: 'Copied!',
    ar: 'تم النسخ!',
  },
  questNotificaionTitle: {
    en: 'New Quest Available!',
    ar: 'مهمة جديدة متاحة!',
  },
  questNotificationMessage: {
    en: 'You have a new ـ quest available. Go check it out!',
    ar: 'لديك مهمة ـ جديدة متاحة. اذهب للتحقق منها!',
  },
  hourly: {
    en: 'Hourly',
    ar: 'ساعية',
  },
  daily: {
    en: 'Daily',
    ar: 'يومية',
  },
  weekly: {
    en: 'Weekly',
    ar: 'أسبوعية',
  },
  monthly: {
    en: 'Monthly',
    ar: 'شهرية',
  },
  notifications: {
    en: 'Notifications',
    ar: 'الإشعارات',
  },
  all: {
    en: 'All',
    ar: 'الكل',
  },
  questsNotifications: {
    en: 'Quests Notifications',
    ar: 'إشعارات المهام',
  },
  notificationsSettings: {
    en: 'Notifications Settings',
    ar: 'إعدادات الإشعارات',
  },
  notificationsSettingsDesc: {
    en: 'You can choose which types of quests you want to receive notifications for',
    ar: 'يمكنك اختيار انواع المهام التي تريد تلقى الإشعارات لها',
  },
  ingameName: {
    en: 'Ingame Name',
    ar: 'اسمك في اللعبة',
  },
  ingameId: {
    en: 'Ingame ID',
    ar: 'ID اللعبة',
  },
  chooseQuest: {
    en: `Choose a quest that you want to complete such as watching clips or live streams, and start collecting points.`,
    ar: `اختر مهمة تريد إكمالها مثل مشاهدة الكليبات أو البث المباشر ، وابدأ في جمع النقاط.`,
  },
  completeQuests: {
    en: `Complete quests and collect points to claim rewards or participate in auctions.`,
    ar: `اكمل المهام واجمع النقاط لطلب الجوائز أو المشاركة في المزادات.`,
  },
  getRewards: {
    en: `Claim your rewards!`,
    ar: `احصل على جوائزك!`,
  },
  start: {
    en: 'Start',
    ar: 'ابدأ',
  },
  auctions: {
    en: 'Auctions',
    ar: 'المزادات',
  },
  hero: {
    en: 'Hero',
    ar: 'البطل',
  },
  loadingLiveStream: {
    en: 'Loading Live Stream',
    ar: 'جاري تحميل البث المباشر',
  },
  earned: {
    en: 'Earned',
    ar: 'مكتسبة',
  },
  popularGames: {
    en: 'Popular Games',
    ar: 'الألعاب الشعبية',
  },
  viewAll: {
    en: 'View all',
    ar: 'عرض الكل',
  },
  redeemFor: {
    en: 'Redeem for',
    ar: 'استبدل مقابل',
  },
  bid: {
    en: 'BID',
    ar: 'مزايدة',
  },
  topAuctions: {
    en: 'Top Auctions',
    ar: 'أعلى المزادات',
  },
  bids: {
    en: 'BIDS',
    ar: 'المزايدات',
  },
  placeBid: {
    en: 'Place a bid',
    ar: 'ضع مزايدة',
  },
  enterYourBid: {
    en: 'Enter your bid',
    ar: 'أدخل مزايدتك',
  },
  topBidders: {
    en: 'Top Bidders',
    ar: 'أعلى المزايدين',
  },
  h: {
    en: 'h',
    ar: 'س',
  },
  d: {
    en: 'd',
    ar: 'ي',
  },
  m: {
    en: 'm',
    ar: 'د',
  },
  s: {
    en: 's',
    ar: 'ث',
  },
  auctionEnded: {
    en: 'Auction Ended',
    ar: 'انتهى المزاد',
  },
  bidNow: {
    en: 'Bid Now',
    ar: 'زايد الآن',
  },
  viewAuction: {
    en: 'View Auction',
    ar: 'عرض المزاد',
  },
  bidEnded: {
    en: 'Bid Ended',
    ar: 'انتهت المزايدة',
  },
  finalBid: {
    en: 'Final Bid',
    ar: 'المزايدة النهائية',
  },
  price: {
    en: 'Price',
    ar: 'السعر',
  },
  bidders: {
    en: 'Bidders',
    ar: 'المزايدين',
  },
  bidder: {
    en: 'bidder',
    ar: 'مزايد',
  },
  winning: {
    en: 'winning',
    ar: 'رابحين',
  },
  allAuctions: {
    en: 'All auctions',
    ar: 'كل المزادات',
  },
  timeLeft: {
    en: 'Time left',
    ar: 'الوقت المتبقي',
  },
  maxBid: {
    en: 'Maximum bid',
    ar: 'اعلى مزايدة',
  },
  topBids: {
    en: 'Top bids',
    ar: 'اعلى المزايدات',
  },
  minBid: {
    en: 'Minimum bid',
    ar: 'اقل مزايدة',
  },
  topBidsWillWin: {
    en: 'Top {} bids will win this reward',
    ar: 'اعلى {} مزايدات سوف يفوزوا بالجائزة',
  },
  successBid: {
    en: 'Your bid has been placed successfully',
    ar: 'تم وضع مزايدتك بنجاح',
  },
  days: {
    en: 'days',
    ar: 'ايام',
  },
  hours: {
    en: 'hours',
    ar: 'ساعات',
  },
  minutes: {
    en: 'minutes',
    ar: 'دقائق',
  },
  seconds: {
    en: 'seconds',
    ar: 'ثواني',
  },
  wonAndUnClaimed: {
    en: 'You won this auction and it is not claimed yet',
    ar: 'لقد فزت بهذا المزاد ولم يتم تسليمه بعد',
  },
  activeAuctions: {
    en: 'Active Auctions',
    ar: 'المزادات النشطة',
  },
  endedAuctions: {
    en: 'Ended Auctions',
    ar: 'المزادات المنتهية',
  },
  upcomingAuctions: {
    en: 'Upcoming Auctions',
    ar: 'المزادات القادمة',
  },
  claimed: {
    en: 'Claimed',
    ar: 'تم الاستلام',
  },
  expiredAuctions: {
    en: 'Expired Auctions',
    ar: 'المزادات المنتهية',
  },
  ended: {
    en: 'Ended',
    ar: 'انتهى',
  },
  bidIsLow: {
    en: 'Your bid is less than the minimum auction amount',
    ar: 'مزايدتك أقل من الحد الأدنى للمزاد',
  },
  activeAuction: {
    en: 'Active Auction',
    ar: 'مزاد نشط',
  },
  signInWithEmail: {
    en: 'Sign in with Email',
    ar: 'تسجيل الدخول بالبريد الإلكتروني',
  },
  login: {
    en: 'Login',
    ar: 'تسجيل الدخول',
  },
  enterEmail: {
    en: 'Enter your email',
    ar: 'أدخل بريدك الإلكتروني',
  },
  enterPassword: {
    en: 'Enter your password',
    ar: 'أدخل كلمة المرور',
  },
  renterPassword: {
    en: 'Re-enter your password',
    ar: 'أعد إدخال كلمة المرور',
  },
  enterUsername: {
    en: 'Enter your username',
    ar: 'أدخل اسم المستخدم',
  },
  enterEmailOrUsername: {
    en: 'Enter your email or username',
    ar: 'أدخل بريدك الإلكتروني أو اسم المستخدم',
  },
  signUp: {
    en: 'Sign Up',
    ar: 'تسجيل',
  },
  loginText: {
    en: 'Heros.live is a live-streaming and video content platform that connects the Arab gamers with their local audience.',
    ar: 'هيروز هو منصة للبث المباشر ومحتوى الفيديو يربط اللاعبين العرب مع جمهورهم المحلي.',
  },
  iAccept: {
    en: 'I Accept Heros',
    ar: 'أوافق على هيروز',
  },
  fillAllFields: {
    en: 'Please fill all fields',
    ar: 'يرجى ملء جميع الحقول',
  },
  passwordDontMatch: {
    en: "Passwords don't match",
    ar: 'كلمات المرور غير متطابقة',
  },
  passwordTooShort: {
    en: 'Password is too short',
    ar: 'كلمة المرور قصيرة جدا',
  },
  acceptTerms: {
    en: 'Please accept the terms and conditions',
    ar: 'يرجى قبول الشروط والأحكام',
  },
  invalidEmail: {
    en: 'Invalid email',
    ar: 'بريد إلكتروني غير صالح',
  },
  invalidPassword: {
    en: 'Invalid password',
    ar: 'كلمة مرور غير صالحة',
  },
  weakPassword: {
    en: 'Weak password',
    ar: 'كلمة مرور ضعيفة',
  },
  confirmPassword: {
    en: 'Confirm password',
    ar: 'تأكيد كلمة المرور',
  },
  successSignUp: {
    en: 'You have successfully signed up , please check your email to verify your account',
    ar: 'لقد سجلت بنجاح ، يرجى التحقق من بريدك الإلكتروني للتحقق من حسابك',
  },
  successLogin: {
    en: 'You have successfully logged in',
    ar: 'لقد سجلت الدخول بنجاح',
  },
  notEnoughPoints: {
    en: 'You do not have enough points to bid',
    ar: 'ليس لديك نقاط كافية للمزايدة',
  },
  minLevelForAuction: {
    en: 'You must be level {level} to bid',
    ar: 'يجب أن تكون مستوى {level} للمزايدة',
  },
  watchContent: {
    en: 'Watch the content you love',
    ar: 'شاهد المحتوى الذي تحبه',
  },
  seeAll: {
    en: 'See All',
    ar: 'عرض الكل',
  },
  startsIn: {
    en: 'Starts in',
    ar: 'يبدأ في',
  },
  beFirstToBid: {
    en: 'No one has placed a bid yet, be the first to bid',
    ar: 'لا يوجد أحد قام بوضع مزايدة حتى الآن ، كن أول من يقدم عرضا',
  },
  claimHistory: {
    en: 'Claim History',
    ar: 'سجل الطلبات',
  },
};

export default dict;

export const StringBag = (name: keyof typeof dict): string => {
  if (I18nManager.isRTL) {
    return Object(dict)[name].ar;
  }
  return Object(dict)[name].en;
};
