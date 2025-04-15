Chat Sync Extension for TypingMind

A complete rewrite of the TypingMind Cloud Backup Extension focused on reliable, efficient sync across multiple devices.

    🙏 This extension was inspired by TypingMind Cloud Backup Extension. Huge props to the original creator!

⚠️ IMPORTANT DISCLAIMER ⚠️

THIS IS EXPERIMENTAL SOFTWARE - USE AT YOUR OWN RISK!

ALWAYS TAKE A MANUAL BACKUP BEFORE INSTALLING! Export your data from "SETTINGS > APPDATA & STORAGE > EXPORT" and save it somewhere safe.

I am NOT responsible for any data loss or corruption that may occur from using this extension. While it's designed to be safe, software bugs happen. Your precious conversations could be lost forever if you don't backup manually first!
🔥 Features

    Better Change Detection: Uses IndexedDB's updatedAt property for precise change tracking
    True Sync Mode: Seamlessly sync your chats and settings across multiple devices
    Backup Mode Option: For those who want one-way backups without automatic imports
    Smart Conflict Resolution: Intelligently merges chat histories when changes occur on multiple devices
    Deletion Tracking: Properly handles chat deletions across devices with tombstone mechanism
    Enhanced Security: Client-side AES-GCM encryption with 256-bit keys
    Operation Queueing: Reliable operation handling prevents race conditions and data corruption
    Special Content Sync: Properly syncs plugins, custom characters, and prompts from IndexedDB
    Console Logging: Detailed debug logs for troubleshooting (enable in settings or add ?log=true to URL)

💾 Installation

    BACKUP YOUR DATA FIRST! Go to "SETTINGS > APPDATA & STORAGE > EXPORT"
    Logout of TypingMind
    Load https://0xcope.github.io/typingmind-sync-s3/s3.js into Menu > Preferences > Extension in TypingMind
    Once installed, a new "Sync" button will appear in the sidebar
    Click this button to configure your storage settings

⚙️ Configuration
Required Settings

    Bucket Name: Your S3 bucket name
    Region: AWS region (use 'auto' for Cloudflare R2)
    Access Key: Your S3 access key
    Secret Key: Your S3 secret key
    Encryption Key: Password for encrypting your data (min 8 characters)

Optional Settings

    S3 Compatible Storage Endpoint: Only needed if using Cloudflare R2, iDrive E2, etc.
    Sync Interval: How often to check for changes (minimum 15 seconds)
    Sync Mode:
        Sync: Full two-way synchronization across devices (default)
        Backup: One-way backup only (no automatic imports)

☁️ AWS Configuration

    Create IAM User
        Create a user in AWS IAM
        Don't select any groups
        Generate an Access Key (select "Other" in Step 1)
        Save the Access Key and Secret Key

    Create S3 Bucket
        Create a new bucket with default settings
        Recommended to use a dedicated bucket for TypingMind data

    Set Bucket Policy

    json

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<AWS Account ID>:user/<IAM username>"
      },
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucketMultipartUploads",
        "s3:ListMultipartUploadParts",
        "s3:AbortMultipartUpload",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::<AWS bucket name>",
        "arn:aws:s3:::<AWS bucket name>/*"
      ]
    }
  ]
}

Set CORS Configuration

json

    [
      {
        "AllowedHeaders": ["*"],
        "AllowedMethods": ["HEAD", "GET", "PUT", "POST", "DELETE"],
        "AllowedOrigins": ["https://www.typingmind.com"],
        "ExposeHeaders": ["Access-Control-Allow-Origin","ETag","x-amz-server-side-encryption","x-amz-request-id","x-amz-id-2"],
        "MaxAgeSeconds": 3000
      }
    ]

    If self-hosting TypingMind, replace https://www.typingmind.com with your domain.

🔄 Using S3-Compatible Storage

This extension works great with:

    Cloudflare R2: 10GB free storage per month
    iDrive E2: 10GB free storage per month
    Any other S3-compatible service

For these services, you'll need to provide the endpoint URL in the settings.
👨‍💻 Usage Tips

    Initial Setup: Run a manual sync right after saving your settings
    Multiple Devices: Best to use one device at a time for most reliable results
    Console Logging: Enable via settings or append ?log=true to URL for debugging
    Troubleshooting: If chats disappear, check that you're using the correct sync mode for your workflow

⚠️ Security Note

Like the original extension, this stores S3 credentials in your browser's localStorage. This is not the most secure method, so:

    Use an IAM user with minimal permissions
    Consider using a dedicated S3 bucket just for TypingMind
    Don't reuse passwords across services

🙏 Attribution

This extension is a complete rewrite inspired by the original TypingMind Cloud Backup Extension. All credit for the original concept and approach goes to that project's creator.
📝 License

This project is licensed under the MIT License.
