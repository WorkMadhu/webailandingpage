# Cal.com Integration Configuration

## Setup Instructions

Your Cal.com booking widget has been successfully integrated into your website!

### How to Configure Your Cal.com Link

1. **Get your Cal.com booking link:**
   - Sign in to your Cal.com account at https://app.cal.com
   - Go to your event types and copy your booking link
   - Example: `yourname/30min` or `yourname/consultation`

2. **Update the booking link in your code:**
   - Open `src/components/CalBookingModal.tsx`
   - Find line 10: `calLink = 'your-username'`
   - Replace `'your-username'` with your actual Cal.com username or full link
   - Example: `calLink = 'johnsmith'` or `calLink = 'johnsmith/30min'`

### What's Been Integrated

✅ Cal.com booking modal component created
✅ Modal automatically loads Cal.com embed script
✅ All "Get Started" buttons trigger booking popup
✅ All "Schedule Free Consultation" buttons trigger booking popup
✅ All CTA section buttons trigger booking popup
✅ Mobile-responsive design
✅ Smooth animations and backdrop blur
✅ Close modal with X button or clicking outside

### Pages with Cal.com Integration

- **Home Page** - Hero section "Get Started" button
- **Home Page** - Service cards "Book A Call" buttons (Service 1, 2, 3)
- **Content Automation Page** - All CTA buttons
- **Omnichannel Outreach Page** - All CTA buttons
- **HR Automations Page** - All CTA buttons
- **CTA Sections** - "Get in touch" and "Get support" buttons

### Testing

To test the integration:
1. Click any "Get Started" or "Schedule" button
2. The Cal.com booking modal should appear instantly
3. The modal should be centered and responsive
4. You should be able to close it by clicking the X or outside the modal

### Customization Options

You can customize the Cal.com embed by editing `src/components/CalBookingModal.tsx`:

- **Layout**: Options include `"month_view"`, `"week_view"`, or `"column_view"` in the `data-cal-config` attribute
- **Brand Color**: Change the cyan brand color by modifying line 43: `brandColor: '#06b6d4'`
- **Size**: Adjust modal size by changing `max-w-4xl` and `h-[90vh]` classes
- **Close on backdrop click**: Clicking outside the modal automatically closes it

### Need Help?

If you encounter any issues:
1. Make sure you have a valid Cal.com account
2. Verify your Cal.com event type is active
3. Check that your booking link is in the correct format
4. Clear browser cache and reload

For more information, visit: https://cal.com/docs/integrations/embed
